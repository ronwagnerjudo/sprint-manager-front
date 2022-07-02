import React from "react";

import GoogleLogin from "../components/GoogleLogin/GoogleLogin"
import image from '../images/login.png'
import image2 from '../images/login2.png'

const styles = {
	container: {
		height: "100%",
		alignItems: "center",
		fontFamily: "system-ui"
	},
	image: {
		backgroundColor: "#dfd3eb",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	image2: {
		width: "400px",
		display: "block",
		alignItems: "center",
		marginLeft: "auto",
		marginRight: "auto",
		paddingTop: "70px"
	},
	slogan: {
		fontFamily: "cursive",
		padding: "30px",
		paddingTop: "4px"
	}
}

const Login = () => {
	return (
		<div className="row text-center" style={styles.container}>
			<div className="col" style={styles.image}>
				<img alt="login" src={image} className="img-fluid"/>
			</div>
			<div className="col">
				<h1>Sprint Manager</h1>
				<h5 style={styles.slogan}>⭐First step for better planning</h5>
				<GoogleLogin />
				<img alt="login 2" src={image2} style={styles.image2} className="img-fluid" />
			</div>
		</div>
	)
}

export default Login