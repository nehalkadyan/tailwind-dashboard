import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useSelector } from "react-redux";

function App() {
  const { toggleSideBar } = useSelector((state) => state.toggle);

  return (
    <div>
      <Navbar />
      {toggleSideBar && <Sidebar />}
    </div>
  );
}

export default App;
