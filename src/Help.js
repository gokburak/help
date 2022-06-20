// // import { useState } from 'react'
// import "./Help.css"

// const Help = ({ count, handleClick ,helpWidth}) => {
//     // const [count, setCount] = useState(0)

//     // const handleClick = ()=>{
//     //     setCount(count + 1)
//     // }
   

//     return (
//         <div onClick={handleClick} style={{width: count ? '80%': '55px'}} >
//             <div className="content" >
//                 <h5>Oda sayısı : {count}</h5>
                

//             </div>

//         </div>
//     )
// }

// export default Help




import React, { useEffect, useState } from 'react'
import "./Help.css"
import dahi from "./assets/dahi.png"


const Help = () => {
const [count, setCount] = useState(0)

const range =  (count)=> {
    let ans = [];
    for (let i = 0; i <= count; i++) {
        ans.push(i);
    }
    return ans;
}

let say = range(count);
useEffect(() => {
   range(count)
}, [count])
  return (
    <div className="container" onClick={() => setCount(count + 1)}  >
        <div className="header">
            <img className="header-logo" src={dahi} alt="logo" />
        <h1 className="title">Hemşire Hasta Takip Sistemi</h1>
       
        </div>
        
       { say.map((a)=>{
         return (<div>
        <div  className={count===0 ? 'room' : "rooms"}> {a+1}. Oda</div>
        
        </div>)}
)}
    </div>
  )
}

export default Help
