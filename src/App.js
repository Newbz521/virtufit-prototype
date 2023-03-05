import FittingRoom from "./components/FittingRoom";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div className="main-container">
      {/* <div className="mainImage"></div> */}
      <Navbar />
      <FittingRoom />
    </div>
  );
}

export default App;
