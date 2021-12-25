import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/"
          >
            <h3>Home</h3>
          </Link>
          <div class="d-flex">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/login"
            >
              <p
                style={{
                  marginRight: 30,
                }}
              >
                Login
              </p>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/register"
            >
              <p>Register</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
