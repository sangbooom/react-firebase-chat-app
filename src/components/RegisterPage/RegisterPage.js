import React from "react";

const RegisterPage = () => {
  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>Register</h3>
      </div>
      <form>
        <label>ExampleRequired</label>
        <input
          name="email"
          type="email"
          //   ref={register({ required: true, maxLength: 10 })}
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <label>ExampleRequired</label>
        <input
          name="exampleRequired"
          //   ref={register({ required: true, maxLength: 10 })}
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <label>ExampleRequired</label>
        <input
          name="exampleRequired"
          //   ref={register({ required: true, maxLength: 10 })}
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <label>ExampleRequired</label>
        <input
          name="exampleRequired"
          //   ref={register({ required: true, maxLength: 10 })}
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
