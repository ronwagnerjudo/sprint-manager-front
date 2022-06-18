import React from 'react'

const MenuProfile = (props) => {
  return (
    <div className="flex-shrink-0 p-3">
      <h5 className='p-2 d-inline text-light'>{props.username}</h5>
      <img src={props.picture}
          alt="Generic placeholder image" className="d-inline img-fluid rounded-circle border border-dark border-3"
          style={{ height: "60px"}} />
    </div>
  )
}

export default MenuProfile