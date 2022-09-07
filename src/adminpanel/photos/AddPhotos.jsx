import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/SideBar/Sidebar/Sidebar'

const AddPhotos = () => {
    const history=useNavigate()

    const [inputs,setInputs]=useState({
        image:''
    }) 

    const sendRequest=async()=>{
        await axios.post('http://localhost:5000/photos',{
            image: String(inputs.image)
        }).then(res=>res.data)
    }

    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/admin'));
    }

  return (
    <div className='row justify-content-center'>
        <div className="col-lg-2">
          <Sidebar/>
        </div>
        <div className="container updateslider col-lg-4">
            <form onSubmit={handleSubmit} className="content">
                <h1 id="say-hello">Add Photos!</h1>
                <div>
                <div className="image">
                    <label for="image">Image</label><br />
                    <input value={inputs.image} onChange={handleChange} name='image' class="fld" placeholder="Enter image" id="image" />
                </div>
                </div>
                <button className="btn upd" type="submit">Add Slider</button>
            </form>
    </div>
        
    </div>
  )
}

export default AddPhotos
