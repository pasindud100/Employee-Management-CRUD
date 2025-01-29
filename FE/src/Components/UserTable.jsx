import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Tablee from "./Tablee";
import AddUser from "./AddUser";
import UpdatedUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

export default function UserTable() {
  const [users, setUsers] = useState([]); // State for user list
  const [userId, setUserId] = useState(); // State for selected user to delete
  const [updatedUserId, setUpdatedUserId] = useState(); // State for selected user to update
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Fetch users when component loads or after changes
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setUsers(response.data); // BE returns an array of users
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user function
  const deleteuser = (userid) => {
    console.log("Delete user function called with ID:", userid);
    setUserId(userid);
  };

  const handleUserDelet = async () => {
    console.log("Deleting user with ID:", userId);
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/delete/${userId}`
      );
      if (response.data.success) {
        toast.success(response.data.message);
        fetchUsers(); // Refresh the user list
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("An error occurred while deleting the user");
    }
  };

  // Handle input changes for the update form
  const handlechange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // Handle updating user data
  const UpadteUserData = (Updatedid) => {
    setUpdatedUserId(Updatedid);

    const selectedUser = users.find((user) => user.id === Updatedid);
    if (selectedUser) {
      setValue({
        name: selectedUser.name,
        email: selectedUser.email,
        phone: selectedUser.phone,
      });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/api/update/${updatedUserId}`,
        value
      );
      if (response.data.success) {
        toast.success(response.data.message);
        fetchUsers(); // Refresh the user list
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("An error occurred while updating the user");
    }
  };

  return (
    <>
      <Tablee
        users={users}
        Deleteuser={deleteuser}
        UpdatedUser={UpadteUserData}
      />
      <AddUser fetchUsers={fetchUsers} />
      <UpdatedUser
        handleOnSubmit={handleOnSubmit}
        value={value}
        handlechange={handlechange}
      />
      <DeleteUser handleUserDelet={handleUserDelet} />
    </>
  );
}
