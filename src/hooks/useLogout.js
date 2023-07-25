import { useDispatch } from "react-redux";
import { clearUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(clearUser());
    navigate("/login");
    localStorage.removeItem("user");
  };

  return { logout };
};

export default useLogout;
