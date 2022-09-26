import axios from 'axios'

import React, { useEffect, useState } from 'react'

export default function Movieshow() {
    const[movie,setmovie]=useState([]);
    const[text,settext]=useState("moviesname");
    const changetext=(e)=>{

settext(e.target.value);
console.log(text)
    }
    
useEffect(()=>{
  axios.get(`https://api.tvmaze.com/search/shows?q=${text}`).then((res)=>{

    console.log(res.data);
                    
      // console.log(res.data[0].show.rating) 
      setmovie(res.data)
    //   if(res.data.length===0){
    //     alert("Matches not found");
    //     console.log("good")
    // }
        })
        
        

})

  return (
    <>
    {/* <input type="radio" id="age1" name="age" value="show"></input>
    <label for="shows">shows</label> */}
    {/* <input type="radio">actors</input> */}
    <nav className="navbar navbar-light bg-light"style={{ backgroundImage: 
 "url('https://wallpapercave.com/wp/gQSAMah.jpg')"}}>
  <form className="form-inline" >
    <input className="form-control mr-sm-2 mx-4" onChange={changetext} type="search" placeholder="eg..friends" aria-label="Search"/>
    {/* <button className="btn btn-outline-success my-2 my-sm-0 mx-4" type="submit">Search</button> */}
  </form>
</nav>
{/* <button >fetch movies</button> */}

<div className='container'>
    <div className="row mb-5 mx-5">
    {
 movie.map((value,index)=>{
  // const slice=(0,10);
    return(
      
<div className= '<div className="col-lg-3 col-md-5 col-6'style={{width: "18rem"}}>
  <img className="card-img-top my-3" src={value.show.image?value.show.image.medium:"https://static.tvmaze.com/uploads/images/medium_portrait/422/1057207.jpg"} alt="no image"/>
  <div className="card-body">
    <h5 className="card-title">{value.show.name}</h5>
    <p className="card-text my-10">{value.show.genres+" "}</p>
    <p className='card-text'>⭐{value.show.rating.average?value.show.rating.average:"No rating"}</p>
   
 {/* <p className='card-text'>{value.show.summary}</p> */}
    <a href={value.show.url} className="btn btn-primary" >go to link</a>
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
