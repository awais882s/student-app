import React, { useState } from 'react';
import { data } from './data';
import StudentList from './studentList';
import { bootstrap } from 'bootstrap/dist/css/bootstrap.min.css';

export default function Students() {
  const [students, setStudents] = useState(data)
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name:</th>
                <th scope="col">RollNo:</th>
                <th scope="col">Class</th>
              </tr>
            </thead>
          </table>
          {
            students.map((item) => {
              return <StudentList key={item} />

            })
          }
        </div>
      </div>
    </div>
  )
}
