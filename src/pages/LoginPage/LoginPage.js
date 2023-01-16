import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login } from "../../api/userLogin.api";
import { Loading } from "../../components";
import { useState } from "react";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  const successLogin = () => {
    setLoading(false);
    toast.success("ورود با موفقیت انجام شد")
  }
  const failedLogin = () => {
    setLoading(false);
    toast.error("ورود ناموفق، دوباره سعی کنید")
  }

  const RoutePageHandler = () => {
    navigate("/dashboard");
    successLogin();
  };
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    try {
      const response = await Login(data);
      if (response.token) {
        RoutePageHandler();
      }
    } catch (e) {
      failedLogin();
    }
  
  };

  return (
    <>
      <Loading active={loading} />
      <div className="loginPage">
        <div className="loginPage__container">
          <h3>لطفا نام کاربری و رمز عبور خودرا وارد کنید</h3>
          <form
            id="login"
            onSubmit={handleSubmit}
            className="loginPage__container__inputs"
          >
            <div className="loginPage__container__inputs__user">
              <label>نام کاربری :</label>
              <Input
                type="text"
                size="large"
                name="username"
                value="kminchelle"
              />
            </div>
            <div className="loginPage__container__inputs__pass">
              <label>پسورد :</label>
              <Input
                type="password"
                size="large"
                name="password"
                value="0lelplR"
              />
            </div>
          </form>
          <Button text="وارد شوید" type="official" size="normal" form="login" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
