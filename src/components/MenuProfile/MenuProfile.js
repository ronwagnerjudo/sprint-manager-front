import React from 'react'
import Dropdown from "react-bootstrap/Dropdown"

const MenuProfile = (props) => {
  return (
    <div className="collapse navbar-collapse justify-content-end" id="navbar-list-4">
      <ul className="navbar-nav d-flex">
        <Dropdown className="d-inline mx-2" drop="down">
          <Dropdown.Toggle id="dropdown-autoclose-true" variant="dark">
            <img src={props.picture} width="40" height="40" className="rounded-circle" alt='profile' referrerpolicy="no-referrer"/>
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Header>{props.email}</Dropdown.Header>
            <Dropdown.Item href="http://localhost/settings">Settings</Dropdown.Item>
            <Dropdown.Item href="http://localhost/api/user-api/logout" className="text-danger" style={{fontWeight: "bold"}}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </div>
  )
}

export default MenuProfile