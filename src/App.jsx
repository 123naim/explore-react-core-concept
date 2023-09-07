import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singers'

function App() {
  const actors = ['Sakib', 'Raj', 'Josim', 'Rubel'];
  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahman', age: 23},
    {id: 2, name: 'Eva Rahman', age: 25},
    {id: 3, name: 'Suvro Dev', age: 30},
    {id: 4, name: 'Hello Song', age: 15},
    {id: 5, name: 'Google Song', age: 10}
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <Actor name={"Bappa Raz"}></Actor>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo
        task="Learn React"
        isDone={true}>
      </Todo>
      <Todo
        task="Explore Core Concept"
        isDone={false}>
      </Todo>
      <Todo
        task="Learn Next.js"
        isDone={true}>
      </Todo> */}

      {/* <Device name="Laptop" price="23"></Device>
      <Device name="mobile" price="55"></Device>
      <Student name="nayem" score="55"></Student>
      <Student name="pinke" score="54"></Student>
      <Student></Student>
      <Persion></Persion>
      <Developer></Developer> */}
    </>
  )
}

function Persion() {
  const age = 21;
  const money = 445;
  const persion = {
    name: 'sakib',
    address: 'Bangladesh'
  }
  return (
    <div className='student'>
      <h4>I am a {persion.name} with age: {age}</h4>
      <h5>Address: {persion.address}</h5>
      <h4>Money: {money}</h4>

    </div>

  )
}

function Student({ name = 'defalt', score = 0 }) {
  console.log(name, score)
  return (
    <div className='student'>
      <h2>This is student</h2>
      <p>Name: {name}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    border: '1px solid red',
    padding: '10px',
    borderRadius: '20px',
    marginTop: '30px'
  }
  return (
    <div style={developerStyle}>
      <h4>Devoloper</h4>
      <h4>Coding: </h4>
    </div>
  )
}

function Device(props) {
  // console.log(props)
  return <h3>This is Device: {props.name} Price: {props.price}</h3>
}

export default App
