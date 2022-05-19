import React, { useState } from 'react';
import { data } from './data';
import StudentList from './studentList';

export default function Students() {
  const [students, setStudents] = useState(data)
  const [name, setName] = useState("")
  const [rollno, setRollno] = useState("")
  const [stdclass, stdClass] = useState("")

  // const innputHandler = () => {
  //   console.log("e", e.target.name);
  //   console.log("E", e.target.value);
  // }

  const ctaHandler = () => {
    let student = {
      name,
      rollno,
      stdclass,
    }
    console.log(student);
    // new data add in student list
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input type="text" placeholder='name' name='name' onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='RollNo' name='name' onChange={(e) => setRollno(e.target.value)} />
          <input type="text" placeholder='Class' onChange={(e) => stdClass(e.target.value)} />
          <button onClick={ctaHandler}>
            Submit
          </button>
          <hr />
          <h1>List of Students</h1>
          <table class="table">
            <thead>
              <tr>
                <th>No:</th>
                <th scope="col">Name:</th>
                <th scope="col">RollNo:</th>
                <th scope="col">Class</th>
              </tr>
            </thead>
            {
              students.map((item, index) => {
                return <StudentList index={index} student={item} />

              })
            }
          </table>
        </div>
      </div>
    </div>
  )
}
