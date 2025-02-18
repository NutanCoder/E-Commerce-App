import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth_slice";
import SearchComponent from "./search_componets";
import LoginButton from "./login_button";

function Navbar() {
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const logoutAction = () => {
    googleLogout();
    dispatch(logout());
  };

  return (
    <div className="bg-teal-800">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center md:flex-row flex-col ">
          <div className="flex  md:flex-row flex-col ">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to={"/category"}>
              Categories
            </Link>
          </div>
          <div>
            <div className="flex gap-2  md:flex-row flex-col">
              <SearchComponent />
              <div>
                {user && (
                  <button className="nav-link" onClick={logoutAction}>
                    Logout ({user.name})
                  </button>
                )}
                {!user && <LoginButton />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
