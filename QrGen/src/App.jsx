import QRCode from "react-qr-code";
import React from 'react'
import { useState } from "react";
import "./App.css"
const App = () => {
  const [value, setvalue] = useState("")

  const [qrCode, setqrCode] = useState("")

  function handleChange(e){
    setvalue(e.target.value)
  }

  function handleQr_change(){
    setqrCode(value)
    setvalue("")
  }
  return (
    <>
    <h1>QR code generator</h1>
    <input type="text" 
    value={value}
    onChange={(e)=>{handleChange(e)}}
    />


    <button onClick={()=>{handleQr_change()}}>Submit</button>

    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={qrCode}
    viewBox={`0 0 256 256`}
  />
    </>
  )
}

export default App










// import { useState, useEffect } from 'react'
// import useLocalStorage from './useLocalStorage';
// import './App.css'
// import QRCode from "react-qr-code";
// function App() {
//   const [inputval, setinputval] = useState("")
//   const [qrcode, setqrcode] = useState("")
//   let d = useLocalStorage(0, 44)
//   function handleChange(e) {
//     setinputval(e.target.value)
//   }

//   function handleGen() {
//     setqrcode(inputval)
//     setinputval("")
//   }

//   return (

//     <>
//     <input type="text" 
//     onChange={(e)=>{handleChange(e)}}
//     value={inputval}
//     />
//     <button onClick={()=>{handleGen()}} disabled={inputval && inputval.trim() !== ""?false:true}>Generate</button>
//     <QRCode
//     size={256}
//     style={{ height: "auto", maxWidth: "100%", width: "100%" }}
//     value={qrcode}
//     viewBox={`0 0 256 256`}
//     />
//     <div>
//       {d}
//     </div>
//     </>
//   )
// }
//   export default App
