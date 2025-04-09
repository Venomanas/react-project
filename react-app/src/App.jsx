import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr />
      <Outlet /> {/* This is where nested routes will appear */}
    </>
  );
}

export default App;
