import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <div className="container md:mx-auto p-4 my-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
