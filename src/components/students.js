import React, { useState } from "react";
import { data } from "./data";
import StudentList from "./studentList";
import "../Boostrap/index.css";

export default function Students() {
  const [students, setStudents] = useState(data);
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [batch, setBatch] = useState("");

  // const innputHandler = () => {
  //   console.log("e", e.target.name);
  //   console.log("E", e.target.value);
  // }

  const ctaHandler = () => {
    let newStudent = {
      name,
      rollno,
      batch,
    };
    console.log("New add Students", newStudent);
    // new data add in student list
    setStudents([...students, newStudent]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input
            className="form-control m-4"
            type="text"
            placeholder="Please Enter Your Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control m-4"
            type="text"
            placeholder="Please Enter Your Roll No"
            name="name"
            onChange={(e) => setRollno(e.target.value)}
          />
          <input
            className="form-control m-4"
            type="text"
            placeholder="Please Enter Your Roll No"
            onChange={(e) => setBatch(e.target.value)}
          />
          <button className="btn btn-danger w-100 ms-4" onClick={ctaHandler}>
            Submit
          </button>
          <hr />
          <h1 className=" d-flex justify-content-center align-items-center">List of Students</h1>
          <table class="table table-info">
            <thead>
              <tr>
                <th>No:</th>
                <th scope="col">Name:</th>
                <th scope="col">RollNo:</th>
                <th scope="col">Class</th>
              </tr>
            </thead>
            {students.map((item, index) => {
              return <StudentList index={index} student={item} />;
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
