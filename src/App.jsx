import { useState } from 'react';
import  './App.css'

function App() {
  let a = Math.floor(Math.random()*90+10);
  let [tarvuz,setTarvuz]=useState(a); 
  let [korsat,setKorsat]=useState(true);
  let [text,setText]=useState('');
function plus(){
  setTarvuz(tarvuz+1)
}
function minus(){
  setTarvuz(tarvuz-1)
}
function change(e){
  setText(e.target.value);
  
}

  return (
    <div>
        <h1>Counter</h1>
      <div className="tepa">
      <button onClick={plus}>PLUS</button>
      <h2>{tarvuz}</h2>
      <button onClick={minus}>MINUS</button>
      </div>
      <hr />
      <h1>Hidden Component</h1>
      <div className="orta">
        <button onClick={()=>setKorsat(false)}>HIDDEN</button>
        <button onClick={()=>setKorsat(true)}>SHOW</button>
        <div className="box" style={{display:korsat==true?"block":"none"}}>
          <p>Hello my name is Modric</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6uPsFExHWe66qaWaz0EX26stfR5VoJH7dA&s" alt="" />
        </div>
      </div>
      <hr />
      <h1>Input Change</h1>
      <div className="pas"> 
        <input type="text" placeholder='yozing' onChange={change}/>
        <p><b>Your Text:</b>{text}</p>
      </div>
    </div>
  )
}

export default App