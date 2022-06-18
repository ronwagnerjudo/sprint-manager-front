import React, { Component, useEffect, useState } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Login from "../../components/Login/Login"
import Logout from "../../components/Logout/Logout"
import Cookies from 'js-cookie';
import MenuProfile from "../../components/MenuProfile/MenuProfile"
import axios from "axios"

class Menu extends Component {
  // const err = false
  constructor(props){
    super(props)
    this.state = {
      login: Cookies.get("creds"),
      userInfo: {}
    }
  }
  
  componentDidMount() {
    if(this.state.login){
      this.LoadUserInfo();
    }
  }

  LoadUserInfo() {
    axios.get("https://10.0.0.23:5000/userinfo", { withCredentials: true }).then((resp) => {
      let user = resp.data
      
      this.setState((prevState) => {
        return { 
          ...prevState,
          userInfo: user
        }
      })
    }).catch((err)=>{
      console.error(err.response.data)
      alert("Somthing went wrong!!! please reload!")
    })
  }

  render(){
    return(
      <Navbar className="navbar navbar-dark bg-dark" bg="primary" variant="dark" style={{ height: "70px"}}>
        <Container>
          <Navbar.Brand href="/">Sprint Manager</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="tasks">Tasks</Nav.Link>
            <Nav.Link href="settings">Settings</Nav.Link>
          </Nav>
          <Nav className="justify-content-end position-relative align-items-center">
            {
              this.state.login ? <><Logout /><MenuProfile username={this.state.userInfo.email} picture={this.state.userInfo.picture} /></> : <Login/>
            }
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default Menu