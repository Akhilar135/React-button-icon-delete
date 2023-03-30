//import logo from './logo.svg';
import React from 'react'
import {useState} from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import Tasks from './Tasks';

function App() {
  
  const [tasks, setTasks] = useState([

  {
    id:1,
    text: 'Task No 1',
   
},
{
    id:2,
    text: 'Task No 2',
    
},
{
    id:3,
    text: 'Task No 3',
    
}
  ])
  

  const rClick = ()=>{
    console.log("Clicked the Red Button")
  }

const gClick = ()=>{
    console.log("Clicked the Green Button")
  }
  const bClick = ()=>{
    console.log("Clicked the Blue Button")
  }
  const onDelete = (id)=>{
    setTasks(tasks.filter((task)=>
    task.id !==id
    ))
  }

  return (
    <div>
      <div className="App">
      <Header headings="HELLO"></Header>
        <header className="App-header">
      <div className="container"><h1>Welcome All</h1></div>
      <div className="box1"><h2>Enjoy React</h2></div>
      </header>
      <div> <Button color='red' text='Button 1' onClick={rClick}></Button></div>
      <div><Button color='green' text= "Button 2" onClick={gClick}/></div>
      <div><Button color='blue' text="Button 3" onClick={bClick}/>
      <Tasks tasks={tasks} onClick={onDelete}/>
      </div>
      
      <Footer ftr='Akhila || 2023'></Footer>
      </div>
    </div>
  );
  
}
export default App
