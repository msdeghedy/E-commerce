import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Signin() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className="h-100 d-flex justify-content-center container flex-wrap">
      <Form onSubmit={handleSubmit(onSubmit)} className="w-100 mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors?.email?.type === "required" && (
            <Form.Text className="text-danger">Email is required</Form.Text>
          )}
          {errors?.email?.type === "pattern" && (
            <Form.Text className="text-danger">Wrong Mail Format</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          {errors?.password?.type === "required" && (
            <Form.Text className="text-danger">Password is required</Form.Text>
          )}
        </Form.Group>

        <Button variant="secondary" type="submit" className="w-100">
          SignIn
        </Button>
      </Form>

      <div className="w-100 text-center fw-bold">
        New user? <Link to="/signup">Signup now!</Link>
      </div>
    </div>
  );
}

export default Signin;
