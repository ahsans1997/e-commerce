import { useRef, useState } from "react";
import axiosClient from "../../axiosClient";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import PreLoader from "../../components/preloder/PreLoader";

const Register = () => {

  const { setToken } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const password_confirmation = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      password_confirmation: password_confirmation.current.value,
      role: 1,
    }
    setLoading(true);
    axiosClient.post('/signup', data)
      .then(res => {
        setToken(res.access_token);
      })
      .catch(err => {
        console.log(JSON.parse(err.request.response));
        setError(JSON.parse(err.request.response).message);
        setLoading(false);
      })
  }

  return (
    <div>
      {loading && <PreLoader />}
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <div className="card" style={{ marginTop: "200px" }}>
              <div className="card-header">
                <h2>Login</h2>
              </div>
              <div className="card-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input ref={name} type="text" className="form-control" placeholder="Enter namer" />
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input ref={email} type="email" className="form-control" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input ref={password} type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input ref={password_confirmation} type="password" className="form-control" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                </form>
              </div>
              <div className="card-footer text-center">
                <Link to="/login" style={{ textDecoration: "none", color: 'green', }}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;