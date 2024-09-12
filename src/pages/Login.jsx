import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (click) => {
    click.preventDefault();
    localStorage.setItem("userName", name);
    localStorage.setItem("userPassword", password);
    setName("");
    setPassword("");
    navigate("/Home");
    if (localStorage.getItem("userName", name) === "") {
      Swal.fire("Enter your Name");
    } else if (localStorage.getItem("userPassword", password) === "") {
      Swal.fire("Enter your password");
    } else {
      Swal.fire("User information saved to localStorage!");
    }
  };

  return (
    <>
      <div className="flex  justify-center w-screen h-screen">
        <form
          onSubmit={handleSubmit}
          className="mt-20 p-10 bg-slate-400 h-80 rounded-2xl space-y-6 px-12 shadow-2xl shadow-black"
        >
          <label htmlFor="name" className="px-3 text-white font-bold text-lg">
            Name:{" "}
          </label>
          <input
            type="text"
            value={name}
            placeholder="Enter your Full Name"
            className="border-none px-2 py-1 rounded-md outline-red-600 mx-5"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label
            htmlFor="password"
            className="px-3 text-white font-bold text-lg"
          >
            Password:
          </label>
          <input
            type="password"
            name=""
            id=""
            value={password}
            placeholder="Enter your password"
            className="border-none px-2 py-1 rounded-md outline-red-600"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <input
            type="submit"
            className="text-white rounded-lg hover:bg-blue-300 duration-300 font-bold cursor-pointer mx-32 bg-blue-600 px-5 py-2 my-10"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
