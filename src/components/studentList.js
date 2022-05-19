import React from 'react'

export default function StudentList({ key }){

  return (

    <tr>
      <th>{key.name}</th>
      <td>{key.rollno}</td>
      <td>{key.class}</td>
    </tr>
  )
}
