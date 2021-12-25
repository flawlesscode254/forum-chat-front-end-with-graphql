import Nav from "./Nav";

function Register() {
  return (
    <div>
      <Nav />
      <div class="row justify-content-around">
        <div class="col-4 mt-5">
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Username
            </label>
            <div class="col-sm-10">
              <input type="password" placeholder="Username..." class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input type="password" placeholder="Email address..." class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input type="password" placeholder="Password..." class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Confirm
            </label>
            <div class="col-sm-10">
              <input type="password" placeholder="Confirm Password..." class="form-control" id="inputPassword" />
            </div>
          </div>
          <button type="button" class="btn btn-outline-primary">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
