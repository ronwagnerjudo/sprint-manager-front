import React, { Component } from "react"

import Menu from "../components/Menu/Menu"
import LoadingScreen from 'react-loading-screen';
import icon from '../images/icon.png'
import Cookies from 'js-cookie';
import axios from "axios"

const sleep = ms => new Promise(r => setTimeout(r, ms));

class Page extends Component {
	constructor(props) {
		super()
		this.state = {
			login: Cookies.get("jwt"),
			loading: true,
			userInfo: {},
		}
	}

	componentDidMount() {
		if (this.state.login) {
			this.LoadUserInfo();
		}
	}

	async LoadUserInfo() {
		await sleep(500)
		axios.get("http://127.0.0.1:5000/userinfo", { withCredentials: true }).then((resp) => {
			let user = resp.data
			this.setState((prevState) => {
				return {
					...prevState,
					userInfo: user,
					loading: false
				}
			})
		}).catch((err) => {
			console.error("Unable to fetch data...")
			console.error(err)
		})
	}

	render() {
		return (
			<LoadingScreen loading={this.state.loading} bgColor='#f1f1f1' spinnerColor='#683ba4' textColor='#676767' logoSrc={icon} text='Loading Sprint Manager Content..'>
				<Menu email={this.state.userInfo.email} picture={this.state.userInfo.picture} />
				<div className="container">
                    {this.props.children}
				</div>
			</LoadingScreen>
		)
	}
}

export default Page