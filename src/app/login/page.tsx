"use client"
import { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    if (username === "ghaniyakhan08" && password === "asfoodbygk1012") {
      setIsAuthenticated(true);
    } else {
      setError("Please try again, password incorrect");
    }
  };

  if (isAuthenticated) {
    return <h1 className="text-center text-2xl font-bold">Dashboard</h1>;
  }
  return (
    // <div className="flex justify-center items-center h-screen">
    //   <div className="p-6 w-[400px] bg-yellow-400 h-[300px] rounded-lg">
    //     <div>
    //       <h2 className="text-2xl underline font-extrabold text-center mb-4 ">Admin Sign In</h2>
    //      <div className="flex gap-3 ">
    //      <h1 >User Name:</h1>
    //       <input
    //         type="text"
    //         placeholder="Username"
    //         value={username}
    //         onChange={(e:any) => setUsername(e.target.value)}
    //         className="mb-2 w-[250px] border-black border rounded-lg h-[40px]"
    //       />
    //      </div>
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e:any) => setPassword(e.target.value)}
    //         className="mb-2"
    //       />
    //       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
    //       <button onClick={handleLogin} className="w-full">Sign In</button>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center h-screen bg-black">
    <div className="p-6 w-[400px] bg-yellow-400 h-[350px] rounded-lg shadow-lg">
      <div>
        <h2 className="text-2xl underline font-extrabold text-center mb-6 text-black">Admin Sign In</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium text-black">User Name:</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 w-full border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-black">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button onClick={handleLogin} className="w-full mt-4 p-2 bg-black text-white rounded-lg hover:bg-black transition">Sign In</button>
      </div>
    </div>
  </div>
  );
} 