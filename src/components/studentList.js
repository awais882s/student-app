import React from "react";
export default function StudentList({ student, index, deleteHandler }) {

  return (
    <tbody>
      <tr>
        <td>{index}</td>
        <td>{student.name}</td>
        <td>{student.rollno}</td>
        <td>{student.batch}</td>
        <td>
          <button className="btn btn-info" onClick={() => deleteHandler(index)}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}
