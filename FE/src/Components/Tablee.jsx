import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdOutlineUpdate } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Tablee({ Deleteuser, UpdatedUser }) {
  const [data, setData] = useState([]);

  // Fetch data from the server
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/get");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                Manage <b>Employees</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addEmployeeModal"
              >
                <IoIosAddCircleOutline />
                <span>Add New Employee</span>
              </button>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.users?.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#editEmployeeModal"
                    onClick={() => UpdatedUser(user._id)}
                  >
                    <MdOutlineUpdate />
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteEmployeeModal"
                    onClick={() => Deleteuser(user._id)}
                  >
                    <MdDelete />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
