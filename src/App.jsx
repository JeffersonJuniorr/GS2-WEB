import React from "react";
import { Outlet } from "react-router-dom"; 
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-1">
        <main className="flex-1 bg-gray-50">
          <Outlet /> 
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
