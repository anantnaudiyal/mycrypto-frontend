import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/userSlice";
function Navbar(props) {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <div className="w-full border shadow-xl ">
      <div className="flex   justify-between mx-auto items-center md:px-8 md:py-4 px-3 py-3 container space-x-20">
        <Link to={"/"}>
          {" "}
          <h1 className="md:text-[30px] md:font-black  cursor-pointer">
            My<span className="text-blue-800 font-[1100]">Crypto </span>
          </h1>
        </Link>
        {user === "logged in" && (
          <navitems className="flex font-bold text-[20px] gap-6">
            <Link to={"/top10"}>
              {" "}
              <p className="cursor-pointer hover:text-blue-600">Top10</p>
            </Link>
            <Link to={"/trending"}>
              <p className="cursor-pointer hover:text-blue-600">Trending</p>
            </Link>
            <Link to={"/watchlist"}>
              <p className="cursor-pointer hover:text-blue-600">watchlist</p>
            </Link>
          </navitems>
        )}

        <div className="flex gap-4">
          {user === "logged in" ? (
            <button
              onClick={handleClick}
              className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg">
                  Login
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg">
                  Signup
                </button>{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
