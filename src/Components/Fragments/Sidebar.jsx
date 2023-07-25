import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Icon from "../Element/Icon";
import useLogout from "../../hooks/useLogout";

function Sidebar() {
  const { logout } = useLogout();
  const [hamb, setHamb] = useState(false);
  const [showHamb, setShowHamb] = useState(true);
  const [home, setHome] = useState(true);
  const [catchPoke, setCatchPoke] = useState(false);
  const [pokemon, setPokemon] = useState(false);
  const [shop, setShop] = useState(false);

  const handleHamb = () => {
    setHamb(!hamb);
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      setHamb(true);
      setShowHamb(false);
    }

    if (window.innerWidth < 768) {
      setShowHamb(true);
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        setHamb(true);
        setShowHamb(false);
      }

      if (window.innerWidth < 768) {
        setShowHamb(true);
        setHamb(false);
      }
    });
  }, []);

  return (
    <div>
      {showHamb && (
        <div
          className={`fixed top-7 ${
            hamb ? "left-36" : "left-5"
          } z-50 bg-slate-800 text-white text-sm p-1 rounded-md cursor-pointer`}
          onClick={handleHamb}
        >
          Menu
        </div>
      )}
      <div
        className={`bg-white z-30 ${
          hamb ? "flex" : "hidden"
        } flex-col gap-10 p-5 ${
          showHamb ? "fixed" : "relative"
        } top-0 h-screen lg:px-12`}
      >
        <div className="flex items-center justify-between">
          <img src="/image/Logo.png" alt="pokemon logo" className="w-10" />
        </div>
        <div className="flex flex-col gap-6">
          <Link
            to="/home"
            onClick={() => {
              setHome(true);
              setCatchPoke(false);
              setPokemon(false);
              setShop(false);
            }}
          >
            <Icon
              img="/image/home.png"
              alt="home"
              value="Home"
              side={true}
              className={home ? "bg-slate-200" : undefined}
            />
          </Link>
          <Link
            to="/catch"
            onClick={() => {
              setHome(false);
              setCatchPoke(true);
              setPokemon(false);
              setShop(false);
            }}
          >
            <Icon
              img="/image/tenis.png"
              alt="tenis"
              value="Catch a Pokemon"
              side={true}
              className={catchPoke ? "bg-slate-200" : undefined}
            />
          </Link>
          <Link
            to="/mypokemons"
            onClick={() => {
              setHome(false);
              setCatchPoke(false);
              setPokemon(true);
              setShop(false);
            }}
          >
            <Icon
              img="/image/inbox.png"
              alt="inbox"
              value="My Pokemons"
              side={true}
              className={pokemon ? "bg-slate-200" : undefined}
            />
          </Link>
          {/* <Icon
            img="/image/profile.png"
            alt="profile"
            value="My Profile"
            side={true}
          /> */}
          <Link
            to="/shop"
            onClick={() => {
              setHome(false);
              setCatchPoke(false);
              setPokemon(false);
              setShop(true);
            }}
          >
            <Icon
              img="/image/store.png"
              alt="shop"
              value="Shop"
              side={true}
              className={shop ? "bg-slate-200" : undefined}
            />
          </Link>
        </div>
        <Icon
          img="/image/logout.png"
          alt="logout"
          value="Logout"
          logout={logout}
        />
      </div>
    </div>
  );
}

export default Sidebar;
