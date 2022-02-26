import React, {useEffect, useState} from 'react';
import './App.css';
import Qoutes from './components/Qoutes';


function App() {
  const [qoutes, setQoutes] = useState([]);
  const url = "https://type.fit/api/quotes";

  
  const getQoute = () =>{
    fetch(url).then(response =>{ 
    return response.json()
  }).then(data=>{
    const qoute = data[Math.floor(Math.random() * data.length)]
    console.log(qoute['text']+qoute['author'])
    setQoutes(qoute);
  }).catch(err => { console.error(err) });}

  //setting a value when compnent load
  useEffect(() => {
    getQoute();
  },[]);

  return (
    <div id="quote-box" >
      {/* <Qoutes  qoutes ={qoutes}/>    */}
      {Object.keys(qoutes).map((qoute,id) => (
            <div key={id}>
                 <p className=""><i>{qoutes['text']}</i></p> 
                 <p id="author">{qoutes['author']}</p>  
            </div>
        ))}
      <button onClick={getQoute} id="new-qoute">New qoute</button>       
    </div>
       
  );
}

export default App;
