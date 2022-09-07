import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../../pages/Slideer/Slideer.css'
import axios from 'axios'
import Sidebar from '../../components/SideBar/Sidebar/Sidebar'
import "../slider/Slider.Detail.css"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SliderDetail = () => {

  const history=useNavigate();

    const [slider , setSlider] = useState([])

   const slider_arr = slider && slider.map(item => {
    return item._id
   })
   console.log(slider_arr)

    useEffect(() => {
      axios.get('http://localhost:5000/slider')
        .then(res => setSlider(res.data.sliders)) 
        .catch(error => console.log(error))
    } , [])

  return (
    <div className='slidersidebardetail'>
      <div className="col-lg-3">
       <Sidebar/>
      </div>
      	<table class="table table-image">
      {slider&&slider.map((sliderss,id)=>(
		  <tbody>
		    <tr key={sliderss.id}>
		      <td class="w-25">
			      <img src={sliderss.image} class="img-fluid img-thumbnail" alt=""/>
		      </td>
		      <td>{sliderss.title}</td>
		      <td>{sliderss.description}</td>
               <NavLink to={`/updateslider/${slider_arr[id]}`} onClick={async() => {
                  await axios.put(`http://localhost:5000/slider/${slider_arr[id]}`)
                  .then(res => res.data)
               }} className='btn btn1 me-1 btnn'>Update</NavLink>
               <NavLink to={`/deleteslider/${slider_arr[id]}`} onClick={async()=>{
                await axios.delete(`http://localhost:5000/slider/${slider_arr[id]}`)
                .then(()=>history('/sliderDetail'))
               }} className='btn btn2 ms-3 btnn'>Delete</NavLink>
		    </tr>
		  </tbody>
      ))}
		</table>   
    </div>
  )
}

export default SliderDetail


