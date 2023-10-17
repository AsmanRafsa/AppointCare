import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className=" bg-gray-200 p-10">
      <div className="container mx-auto flex justify-around gap-5">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flex justify-end gap-5">
          <ul className="flex flex-row gap-5">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/post">
              <li>Post A Hospital</li>
            </Link>
            <Link to="/register">
              <li>Sign Up</li>
            </Link>
            <Link to="/login">
              <li>Log In</li>
            </Link>
          </ul>
        </div>
        <div>
          <Link to="/booking">
            <button className="bg-[#318bd4] p-3 text-white rounded-full">
              Book A Hospital
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
