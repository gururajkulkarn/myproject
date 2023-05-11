import React from 'react'

const Mywebsites = () => {
  return (
    <>

        <marquee  direction="alternate"><h1 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Visit My Websites</h1></marquee>  

  <div className='container  ' style={{backgroundColor:"#fa5437",height:"500px",borderRadius:"30px"}}>

<a href="https://gururajkulkarni.netlify.app/" target="_blank"><button className='m-5 btn btn-info mt-5  animate__animated animate__bounce' style={{margin:"150px"}}>Portfolio Website</button></a>

<a href="https://gururajkulkarn.github.io/gururajkulkarni/" target="_blank"><button className=' m-5 btn btn-warning mt-5 animate__animated animate__bounce '>Portfolio Website</button></a>
<a href="https://gururajkulkarn.github.io/gktodoapp/" target="_blank"><button className='m-5 btn btn-primary mt-5  animate__animated animate__bounce'>Todo Application</button></a>
<a href="https://gururajreactwebsite.netlify.app/" target="_blank"><button className='m-5 btn btn-primary mt-5 animate__animated animate__bounce '>Collgae Website</button></a>
<a href="https://flipcartclonegk.netlify.app/" target="_blank"><button className='m-5 btn btn-info mt-5 animate__animated animate__bounce '>FlipCart Website</button></a>

    </div>
    </>
  )
}

export default Mywebsites
