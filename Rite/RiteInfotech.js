// import {useState, useRef} from 'react'
// import "./styles.css";

// export default function App() {
// const [data, setData]=useState('')
// const refelement=useRef()
// const onChnage=(event)=>{
//   setData(event.target.value)
// }
//   const onClick=()=>{
//     refelement.current.focus()
//   }
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <input ref={refelement} text='text' placeholder='Text here!' onChange={onChnage}></input>
//       <button onClick={onClick}>Clik Me!</button>
//     </div>
//   );
// }


// //===========================

// import { useEffect, useState } from "react";
// import ComA from "./ComA";
// import "./styles.css";

// export default function App() {
//   const [data, setData]=useState([])
//   const [search, setSearch]=useState('')
//   const API='https://reqres.in/api/users?page=2'

//   const forapicall=  async (url)=>{
//     const res= await fetch(url)
//     const data=await res.json()
//     setData(data.data)
//   }
//   console.log("data",data)

//   useEffect(()=>{
//     forapicall(API)
//   },[])

//   const onChange=(event)=>{
//     setSearch(event.target.value)
//   }
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <input text='search' placeholder='Text here!' onChange={onChange} value={search}></input>
//       {data
//       .filter((item)=>{
//         const searchValue=search.toLowerCase()
//         const resultValue=item.first_name.toLowerCase()
//         return resultValue && resultValue.startsWith(searchValue)
//       })
//       .map((item,index)=>{
//         return <ComA key={index} item={item}/>
//       })}
//     </div>
//   );
// }

// //======>

// const ComA=({item})=>{
//   return(
//     <>
//      <li>{item.first_name}</li>
//     </>
//   )
// }
// export default ComA

// //==================================================
// import {useState, useRef} from 'react'
// import "./styles.css";

// export default function App() {
// const [data, setData]=useState('')
// const refelement=useRef()
// const onChnage=(event)=>{
//   setData(event.target.value)
// }
//   const disabled=()=>{
//     refelement.current.disabled=false
//   }
//   const enabled=()=>{
//     refelement.current.disabled=true
//   }
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <input ref={refelement} text='text' placeholder='Text here!' onChange={onChnage}></input>
//       <button onClick={disabled}>Clik Me! for disabled</button>
//       <button onClick={enabled}>Clik Me! for enabled</button>
//     </div>
//   );
// }


// import {useState, useRef} from 'react'
// import "./styles.css";

// export default function App() {
//   const [value, setvalue]=useState('')
// const [data, setData]=useState('')
// const refelement=useRef()
// const onChnage=(event)=>{
//   setvalue(event.target.value)
// }
//   const forenable=()=>{
//     setData(false)
//   }

//   const fordisable=()=>{
//     setData(true)
//   }
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <input disabled={data} ref={refelement} text='text' placeholder='Text here!' onChange={onChnage}></input>
//       <button onClick={forenable}>forenable!</button>
//       <button onClick={fordisable}>fordisable!</button>
//     </div>
//   );
// }


// //========================================================== 

// import "./styles.css";

// export default function App() {
//   const obj = {
//     'Name': "Raj",
//     "Mobile no": "9658566492",
//     "Email id": "abc.com"
//   };
 
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       {
//         Object.entries(obj).map(([key, value]) => {
//           return (
//             <>
//             <li>{key}--{value}</li>
//             </>)
//         })
//       }
//     </div>
//   );
// }

