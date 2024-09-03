import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards";

const Watchlist = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (user === "") {
      alert('Signin/Signup to WatchList!');
      navigate("/");
    } 
  }, [user]);
  const watchlistdata = useSelector((store) => store.watchlist);

  console.log(watchlistdata);




  return watchlistdata.length === 0 ? (
    <div>No data in watchlist</div>
  ) : (
    <div className="">
      <Cards data={watchlistdata} />
    </div>
  );
};

export default Watchlist;
