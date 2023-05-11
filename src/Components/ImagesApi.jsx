import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Button from '@mui/material/Button';
const ImagesApi = () => {

    const [data,setData] = useState([]);
const [text,setText] = useState('Flower')

// useEffect(() => {

//     axios.get('https://pixabay.com/api/?key=14869727-b2425c5245ad6799fcf65fa07&q=yellow+flowers&image_type=photo&pretty=true')
// .then((response)=>{
//     setData(response.data.hits);
//     console.log(response.data)
// }).catch((error)=>{
//     console.log(error)
// })

// }, [])

const handlesubmit = () => {
  
  axios.get(`https://pixabay.com/api/?key=14869727-b2425c5245ad6799fcf65fa07&q=${text}&image_type=photo&pretty=true`)
  .then((response)=>{
      setData(response.data.hits);
      console.log(response.data)
  }).catch((error)=>{
      console.log(error)
  })
}

  return (
    <div className='container'>
      <h1 style={{color:"red",marginLeft:'50px'}}>HD Images</h1>
 <input className='form-control container m-3' style={{border:"1px solid red",width:"500px"}} type="text" value={text} onChange={(e)=>setText(e.target.value)} />
 <Button variant="contained" className="m-2" style={{width:"100px",backgroundColor:"red",fontWeight:"bold"}} onClick={handlesubmit} >Search</Button>

        {data.slice(0,10).map((item,index)=>(
            <div className='container' key={item.id}>            
                    {/* <div className="card"  style={{width: "18rem"}}> */}
  {/* <img src={item.previewURL} className="card-img-top" alt="..."/>
  <div className="card-body col-lg-6">
    <h5 className="card-title">{item.type}</h5>
    <p className="card-text">{item.downloads}</p>
    <p className="card-text">{item.likes}</p>
    <a href="#" className="btn btn-primary">{item.comments}</a>
  </div>
</div> */}
<div className='row'>
<div className='col-3'>
  <button className='btn btn-primary'>{index + 1}</button>
<img src={item.largeImageURL} className="card-img-top mb-2 mt-2" style={{border:"2px solid red",borderRadius:"25px"}} alt="..."/>

  </div>
  <div className='col-9'>
  <img src={item.largeImageURL} className="card-img-top mb-2 mt-2" style={{border:"2px solid red",borderRadius:"25px"}} alt="..."/>

    </div>
  </div>

            </div>
        ))}
   
</div>

  )
}

export default ImagesApi
