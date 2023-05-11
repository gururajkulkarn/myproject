import * as React from 'react';
import Button from '@mui/material/Button';
import { Link,Outlet } from 'react-router-dom';

export default function BasicButtons() {

  return (
  <>


  <div className="container mt-5 mb-5" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <div className="row">
    <div className="col-sm mb-4">
    <div className='col-3'> 
   <Link to="/news" style={{textDecoration:"none"}}><Button  variant="contained" style={{width:"150px",fontWeight:"bold"}}>News</Button></Link>
    </div>
    </div>
    <div className="col-sm mb-4">
    <div className='col-3'>
    <Link to="/youtube" style={{textDecoration:"none"}}><Button variant="contained" style={{width:"150px",backgroundColor:"red",fontWeight:"bold"}} >YouTube</Button></Link>
       </div>
    </div>
    <div className="col-sm mb-4">
    <div className='col-3'>
    <Link to="/pics" style={{textDecoration:"none"}}><Button variant="contained" style={{width:"150px",backgroundColor:"green",fontWeight:"bold"}} color="success">Images</Button></Link>
       </div>
    </div>
    <div className="col-sm mb-4">
    <div className='col-3'> 
    <Link to="/weather" style={{textDecoration:"none"}}><Button variant="contained" style={{width:"150px",backgroundColor:"#0436FB",fontWeight:"bold"}} >Weather</Button></Link>
    </div>
    </div>
    <div className="col-sm mb-4">
    <div className='col-3'> 
    <Link to="/motivation" style={{textDecoration:"none"}}><Button variant="contained" style={{width:"150px",fontWeight:"bold"}} color="success">Motivation</Button></Link>
    </div>
    </div> 
    <div className="col-sm mb-4">
    <div className='col-3'> 
    <Link to="/blogs" style={{textDecoration:"none"}}><Button variant="contained" style={{width:"150px",backgroundColor:"#D3117B",fontWeight:"bold"}} >Blogs</Button></Link>
    </div>
    </div>
    <div className="col-sm mb-4">
    <div className='col-3'> 
    <Link to="/mywebsite" style={{textDecoration:"none"}}><Button variant="contained" style={{width:"150px",fontWeight:"bold",backgroundColor:"#9106F7"}} color="success">MyWebsites</Button></Link>
    </div>
    </div>
    
  </div>
  
</div>


<Outlet/>
      </>
  );
}