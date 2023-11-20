import { useEffect, useRef } from "react";
import axiosClient from "../../axiosClient";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";


const Login = () => {

  const {setToken} = useAuth();

  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: email.current.value,
      password: password.current.value
    }
    axiosClient.post('/login', payload)
      .then(res => {
        setToken(res.access_token);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <div className="card" style={{ marginTop: "200px" }}>
              <div className="card-header">
                <h2>Login</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input ref={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input ref={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                </form>
              </div>
              <div className="card-footer text-center">
                <Link to="/register" style={{ textDecoration:'none', color: 'red' }}>Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;