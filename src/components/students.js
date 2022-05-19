import React, { useState } from 'react';
import { data } from './data';
import StudentList from './studentList';

export default function Students() {
  const [students, setStudents] = useState(data)
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name:</th>
                <th scope="col">RollNo:</th>
                <th scope="col">Class</th>
              </tr>
            </thead>
            {
              students.map((item) => {
                return <StudentList student={item} />

              })
            }
          </table>
        </div>
      </div>
    </div>
  )
}
