import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactUs from "./components/ContactUs";
import NewsList from "./components/NewsList";

function App() {
  return (
    <div>
      <NewsList></NewsList>
      <div className="flex items-center justify-center">
        {/* <ContactUs /> */}
      </div>
    </div>
  );
}

export default App;
