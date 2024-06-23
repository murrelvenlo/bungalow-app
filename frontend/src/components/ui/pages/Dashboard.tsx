import { useState } from "react";
import Navbar from "../Navbar";

const Dashboard = () => {
  // Example state variables, you can replace these with your actual state hooks
  const [logGroup, setLogGroup] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const user = { name: "User" }; // Replace this with your actual user data
  const trainFunction = () => {
    // Add your train AI model logic here
    console.log("Training AI model");
  };

  return (
    <div className="bg-background text-text h-full flex flex-col">
      <Navbar />
      <div className="text-text absolute top-16 sm:left-64 sm:right-0 sm:bottom-0 py-1 flex flex-col">
        <header className="flex justify-between items-center mb-4 p-4">
          <h1 className="text-2xl">Welcome to your dashboard, {user?.name}!</h1>
          <button className="bg-primary p-2 rounded-md" onClick={trainFunction}>
            Train AI model
          </button>
        </header>
        <div className="controls m-4 px-4 flex gap-4">
          <select
            className="bg-background text-text"
            value={logGroup}
            onChange={(e) => setLogGroup(e.target.value)}
          >
            <option value="">Select Log Group</option>
            <option value="/ecs/monitoring-task">Monitoring Task</option>
            <option value="/ecs/frontend-service">Webpage Task</option>
            <option value="/ecs/dotnet-api-service">API Task</option>
            <option value="/ecs/python-ai-api-service">AI Task</option>
          </select>
          <input
            className="bg-background text-text"
            type="text"
            placeholder="Enter search term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
