import React, { useState } from 'react'
// import Moviesearch from '../Moviesearch';
import Movieactor from './Movieactor';
// import Movieactors from './Movieactors';
import Movieshow from './Movieshow';
// import '...App.css';

export default function Input() {
    const [selected, setSelected] = useState(true);

    const handleChange = (e) => {
      console.log(selected);
      if (selected === false) {
        setSelected(true);
      
      } else {
        setSelected(false);

    }
}
let mystyle={
  marginLeft:"15px",
  color:"blue",
fontSize:"50px"}
  return (
    <>
   
      <div style={{backgroundColor:"#373d3c",color:"#373d3c"}}>
       <img src='\tvm-header-logo.png' style={{marginLeft: "3px"}} />
       </div>
      <h2 style={mystyle}>Search your fav show</h2>
      <div className='radio-input' style={{color:"red", fontSize:"30px" ,marginLeft: "12px"
    }} >
              Actors <input type="radio"  style={{width: "20px",height: "20px"}} value={selected} checked={selected === true} onChange={handleChange} />

              By Shows <input type="radio" style={{width: "20px",height: "20px"}}value={selected} checked={selected === false} onChange={handleChange} />

            </div>
   
            <div >{selected === true ? <Movieactor/> :""}
        {selected === false ? <Movieshow /> :""}</div>
    
    
    </>
  );
}
