// import { useState } from "react";
// import Help from "./Help";




// function App() {
//   const [count, setCount] = useState(1)
//   const handleClick = ()=>{
//     setCount(count + 1)
// }

// // let helpWidth  ;

// //   if(count > 5){
// //     helpWidth = "500px"
// //   }

// const helpArray= []

// for(let i= 0; i< count; i++){
//   helpArray.push(
//   <Help key ={i} count={count} handleClick={handleClick}
//   //  helpWidth= {helpWidth}
//     />
//   ) 
// }

//   return (
//     <div className="App" >

//      { helpArray }
    


//     </div>
//   );
// }

// export default App;







import React from 'react'
import Help from './Help'

const App = () => {
  return (
    <div className="App" >
      <Help/>
    </div>
  )
}

export default App