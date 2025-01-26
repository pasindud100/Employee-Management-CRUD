import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Tablee({ Deletuser, UpdatedUser }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function FeatchData() {
      try {
        const user = await axios.get("http://localhost:8080/api/get");
        const response = user.data;
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    FeatchData();
  }, [data]);

  return (
    <>
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
                <a
                  href="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                >
                  <IoIosAddCircleOutline />
                   <span>Add New Employee</span>
                </a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.users?.map((user, index) => {
                return (
                  <tr>
                    <td></td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <a
                        href="#"
                        className="edit cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#editEmployeeModal"
                        onClick={() => UpdatedUser(user._id)}
                      >
                        <MdOutlineUpdate />
                      </a>
                      <a
                        href="#"
                        Name="delete cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteEmployeeModclassal"
                        onClick={() => Deletuser(user._id)}
                      >
                        <MdDelete />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
