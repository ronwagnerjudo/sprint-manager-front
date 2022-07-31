import React from "react"
import { useNavigate } from "react-router-dom";
import MenuProfile from "../../components/MenuProfile/MenuProfile"

const Menu = (props) => {
  let navigate = useNavigate(); 
  const changeRoute = ()=>{
    navigate("/tasks")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container p-5 pt-1 pb-1">
        <span className="navbar-brand" style={{ fontFamily: "system-ui", cursor: "pointer" }} onClick={ changeRoute }>Sprint Manager</span>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
        <MenuProfile email={props.email} picture={props.picture} />
      </div>
    </nav>
  )
}

export default Menu