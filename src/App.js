import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./Sidebar";
import Table from "./Table";
// import Dashboard from "./View";
import Set from "./SetAssignment/Set";
// import Application from "./Result";

function App(){
    return (
      <div>
      {/* <Application/> */}
        <Router>
        <Sidebar />
        <Routes>
          {/* <Route index path="/" element={<Home />} /> */}
          <Route index path="/Table" element={<Table />} />
          {/* <Route index path="/Tables" element={<Tables />} /> */}
          <Route index path="/Set" element={<Set />} />
          {/* <Route index path="/TimeTable" element={<TimeTable />} /> */}
          {/* <Route index path="/Result" element={<Result />} /> */}
        </Routes>
      </Router>
      </div>
    );
}
export default App;