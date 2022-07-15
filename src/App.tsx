import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "./components/NewsList";

function App() {
  return (
    <div>
      <NewsList></NewsList>
    </div>
  );
}

export default App;
