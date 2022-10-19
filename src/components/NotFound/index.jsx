import NotFountImg from "../../assets/imgs/not-found.svg";

function NotFound() {
  return (
    <div className="container w-50 mx-auto">
      <img src={NotFountImg} className="w-100 mx-auto" />
    </div>
  );
}

export default NotFound;
