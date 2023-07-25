import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./features/userSlice";
import Home from "./Components/Layout/Home";
import Catch from "./Components/Layout/Catch";
import MyPokemons from "./Components/Layout/MyPokemons";
import ShopLayout from "./Components/Layout/ShopLayout";

function App() {
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="catch" element={<Catch />} />
        <Route path="mypokemons" element={<MyPokemons />} />
        <Route path="shop" element={<ShopLayout />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
