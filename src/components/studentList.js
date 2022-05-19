import React from 'react'
export default function StudentList({ student, index }) {

  return (

    <tbody>
      <tr>
        <td>{index}</td>
        <td>{student.name}</td>
        <td>{student.rollno}</td>
        <td>{student.class}</td>
      </tr>
    </tbody>

  )
}
