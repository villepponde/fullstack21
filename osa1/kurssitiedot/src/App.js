import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  return (
    
    <div>
      <Header course={course.name} />
      <Content content = {course.parts[0].name} exercise = {course.parts[0].exercises}/>
      <Content content = {course.parts[1].name} exercise = {course.parts[1].exercises}/>
      <Content content = {course.parts[2].name} exercise = {course.parts[2].exercises}/>
      <Total total = {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises} />
    </div>
  )
}
const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Content = (props) => {
  /*
  return (
  <p> {props.content} {props.exercise}</p>
  )
  */
 return (
   <div>
     <Part part = {props.content} amount = {props.exercise} />
   </div>
 )
}
const Total = (props) => {
  return (
  <p>Number of exercises {props.total}</p>
  )
}
const Part = (props) => {
  return (
    <p>{props.part} {props.amount}</p>
  )
}
export default App