import React, { useEffect, useState } from "react";
import Icon from "../Element/Icon";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../../features/userSlice";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import UserBackpack from "../Element/UserBackpack";

function Topbar() {
  const dispatch = useDispatch();
  const { user, details } = useSelector((store) => store.user);
  const [profileClicked, setProfileClicked] = useState(false);
  const { logout } = useLogout();

  useEffect(() => {
    dispatch(fetchDetails(user));
  }, []);

  return (
    <div className="flex items-center bg-white justify-end py-5 px-4 gap-3 fixed top-0 left-0 right-0">
      <UserBackpack />
      <img
        src="/image/Avatar.png"
        alt="avatar"
        className="cursor-pointer"
        onClick={() => {
          setProfileClicked(!profileClicked);
        }}
      />
      {profileClicked && (
        <button
          className="fixed right-10 mt-24 text-sm bg-white shadow-xl py-4 w-44 rounded-lg text-left pl-5"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Topbar;
