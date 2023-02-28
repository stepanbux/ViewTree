import React from "react";
import { useSelector } from "react-redux";

import ItemOfTree from "./components/ItemsOfTree/ItemsOfTree";
import { useGetTreeQuery } from "./redux/api";
import "./App.css";
import PopUp from "./components/PopUp/PopUp";

function App() {
  const popUp = useSelector((state) => state.mainReducer.popUp);
  const { data, isLoading } = useGetTreeQuery(null, {
    refetchOnFocus: true
  });
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className='wrapper' >
      <span>View Tree</span>
      <ItemOfTree items={[data]} />
      {popUp.isShow && <PopUp />}
    </div>
  );
}

export default App;
