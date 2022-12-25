import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const RoutePageHandler = () => {
    console.log("clicked");
    navigate("/dashboard");
  };

  return (
    <div className="loginPage">
      <div className="loginPage__container">
        <h2>لطفا نام کاربری و رمز عبور خودرا وارد کنید</h2>
        <div  className="loginPage__container__inputs" >
          <div className="loginPage__container__inputs__user">
            <label>نام کاربری :</label>
            <Input type="text" size="large" />
          </div>
          <div className="loginPage__container__inputs__pass">
            <label>پسورد :</label>
            <Input type="password" size="large" />
          </div>
        </div>
        <Button
          text="وارد شوید"
          type="official"
          Click={()=>RoutePageHandler()}
          size="normal"
        />
      </div>
    </div>
  );
};

export default LoginPage;
