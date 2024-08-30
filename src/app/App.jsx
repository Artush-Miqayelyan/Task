import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Register = lazy(() => import("pages/Register"))
const Users = lazy(() => import("pages/Users"))

function App() {
  return (
    <div className="app">
      <Suspense fallback={"loading"}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
