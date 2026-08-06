import React from 'react'

const Student = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  )
}

export default Student;