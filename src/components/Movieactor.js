import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import parse from "html-react-parser";
export default function Movieactor() {
    const[movie,setmovie]=useState([]);
    const[text,settext]=useState("");
    const changetext=(e)=>{
e.preventDefault();
settext(e.target.value);
console.log(text)
    }
    useEffect(()=>{
      axios.get(`https://api.tvmaze.com/search/people?q=${text}`).then((res)=>{

        console.log(res.data);
                        
          console.log(res.data) 
          setmovie(res.data)
          // if(res.data.length===0){
          //   //     console.log("not")
          //       alert("Matches not found");
                
          //   }
        //   if(text.length!==0&&res.data.length===0){
        //     // console.log("not")
        //     alert("Matches not found");
            
        // }
            })
          
            
    })
 
   
    // const handleSubmit=(e)=>{
// e.preventDefault();

    // }
   
  return (
    
    <>
    {/* {movie&&movie.length===0?<h1>not</h1>:(
      <h1></h1>
    )} */}
    {/* <input type="radio" id="age1" name="age" value="show"></input>
    <label for="shows">shows</label> */}
    {/* <input type="radio">actors</input> */}
    <nav className="navbar navbar-light bg-light" style={{ backgroundImage: 
 "url('https://wallpapercave.com/wp/gQSAMah.jpg')"}}>
    <form className="form-inline" >
    <input className="form-control mr-sm-2 mx-4" onChange={changetext} type="search" placeholder="eg..Akon" aria-label="Search"/>
    {/* <button className="btn btn-outline-success my-2 my-sm-0 mx-4" type="submit">Search</button> */}
  </form>
</nav>
{/* <button >fetch movies</button> */}
{text.length!==0&&movie.length===0?<p style={{color:"red",marginLeft:"25px",fontSize:"22px"}}>result not found !</p>:(
      <h1></h1>
    )}
<div className='container'>
    <div className="row mb-7">
    

    {
      
 movie.map((value,index)=>{
    return(
        
<div className='<div className="col-lg-4 col-md-5 col-7' style={{width: "18rem"}}>
  <img className="card-img-top my-2" src={value.person.image?value.person.image.medium:"https://static.tvmaze.com/uploads/images/medium_portrait/419/1049996.jpg"} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{value.person.name}</h5>
    <p className="card-text">{value.person.gender}</p>
    <p className='card-text' style={{color:"blue",}}>{value.person.rating}</p>
    <a href={value.person.url} className="btn btn-primary my--2">go to link</a>
    
  </div>
</div>
    )
})

}


</div>
</div>
    </>
  )
}
