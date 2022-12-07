import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Signed up successfully!");
    navigate("/");
  };

  const options = [
    {
      value: 1,
      label: "Male",
    },
    {
      value: 2,
      label: "Female",
    },
  ];
  const multiOptions = [
    {
      value: 1,
      label: "Accessories",
    },
    {
      value: 2,
      label: "Electronics",
    },
    {
      value: 3,
      label: "Makeup",
    },
    {
      value: 4,
      label: "Men's Shoes",
    },
    {
      value: 5,
      label: "Men's Clothes",
    },
  ];

  return (
    <div className="h-100 d-flex justify-content-center container flex-wrap">
      <div className="w-100 text-center fw-bold  p-3 mb-3 ">
        Already have an account? <Link to="/signin">Sign In</Link>
      </div>

      <h1 className="border-bottom w-100 mb-5">Sign Up Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="w-100 mb-3">
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
          <Form.Label className="fw-bold">Gender </Form.Label>

          <Select options={options} className="mb-3" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Interests </Form.Label>

          <Select options={multiOptions} className="mb-3" isMulti />
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
              password should be formatted like: At least 1 Uppercase /1
              Lowercase / 1 Number / 1 Symbol, symbol allowed -- !@#$%^&*_=+- /
              Min 8 chars and Max 12 chars
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
              Passwords don't match
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="secondary" type="submit" className="w-100">
          SignUp
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
