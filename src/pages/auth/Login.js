import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";
import "./Login.css";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (body, config) => {
    try {
      const res = await axios.post("https://reqres.in/api/login", body, config);
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    login(body, config);

    setEmail("");
    setPassword("");
  };
  return (
    <section className="gradient-form" style={{ backgroundColor: "#fff" }}>
      <div className="">
        <div className="row g-0" style={{ height: "100vh" }}>
          <div className="col-lg-5 login-form d-flex justify-content-center align-items-center">
            <div className="card-body p-md-5 mx-md-4 ">
              <div>
                <div className="text-center">
                  <img
                    src="/Asset/DGtal-logos_white 1.svg"
                    alt="logo"
                    className="mt-1 mb-5 pb-1"
                  />
                </div>

                <form onSubmit={handleSubmit}>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      id="form2Example11"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      id="form2Example22"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button
                      className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 form-control"
                      type="submit"
                    >
                      Log in
                    </button>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-danger">
                      Create new
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center gradient-custom-2">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <img
                src="/Asset/image bg.png"
                alt="img bg"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {isAuthenticated ? <Redirect to="/" /> : ""}
    </section>
  );
};

export default Login;
