import React from 'react'
import Sidebar from '../components/SideBar/Sidebar/Sidebar'
import "../adminpanel/Admin.css"
import png from './../assets/dasssshh.png'

const Admins = () => {
  return (
    <div className='row admin'>
       <div className="col-lg-2">
       <Sidebar/>
       </div>
       <div className="col-lg-9">
        <img className='png' src={png} alt="dasboard" />
       </div>
    </div>
  )
}

export default Admins
