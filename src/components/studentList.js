import React from 'react'

export default function StudentList({ student }) {

  return (
    
    <tbody>
      <tr>
        <td>{student.name}</td>
        <td>{student.rollno}</td>
        <td>{student.class}</td>
      </tr>
    </tbody>

  )
}
