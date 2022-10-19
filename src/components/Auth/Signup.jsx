import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-100 d-flex justify-content-center container">
      <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Full Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name"
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 20,
            })}
          />
          {errors?.name?.type === "required" && (
            <Form.Text className="text-danger">Name is required</Form.Text>
          )}
          {errors?.name?.type === "minLength" && (
            <Form.Text className="text-danger">
              Minimum length is 2 charachters
            </Form.Text>
          )}
        </Form.Group>
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

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Phone number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your number"
            {...register("number", {
              required: true,
              pattern: /^01[0-2]\d{1,8}$/,
            })}
          />
          {errors?.number?.type === "required" && (
            <Form.Text className="text-danger">Email is required</Form.Text>
          )}
          {errors?.number?.type === "pattern" && (
            <Form.Text className="text-danger">Wrong Number</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
            })}
          />
          {errors?.password?.type === "required" && (
            <Form.Text className="text-danger">Password is required</Form.Text>
          )}
          {errors?.password?.type === "pattern" && (
            <Form.Text className="text-danger">
              password should be formatted like: At least 1 Uppercase /At least
              1 Lowercase / At least 1 Number / At least 1 Symbol, symbol
              allowed -- !@#$%^&*_=+- / Min 8 chars and Max 12 chars
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold"> Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPass"
            placeholder="Confirm Password"
            {...register("confirmPass", {
              required: true,

              validate: (val) => val === watch("password"),
            })}
          />
          {errors?.confirmPass?.type === "required" && (
            <Form.Text className="text-danger">
              Confirming password is required
            </Form.Text>
          )}
          {errors?.confirmPass?.type === "validate" && (
            <Form.Text className="text-danger">
              {" "}
              Passwords don't matched
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          SignUp
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
