import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";

const LoginPage = () => {
  const { register, errors, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);


  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await firebase.auth().signInWithEmailAndPassword(data.email, data.password);

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>Login</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>This field is required</p>}

        <label>Password</label>
        <input
          name="password"
          type="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>패스워드는 적어도 6글자 이상이여야 합니다</p>
        )}

        <input type="submit" disabled={loading} />
        <Link style={{ color: "gray", textDecoration: "none" }} to="register">
          아직 아이디가 없다면...
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
