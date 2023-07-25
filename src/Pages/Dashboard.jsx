import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Topbar from "../Components/Fragments/Topbar";
import Sidebar from "../Components/Fragments/Sidebar";

function Dashboard() {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
