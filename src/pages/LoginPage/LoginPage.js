import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login } from "../../api/userLogin.api";

const LoginPage = () => {
  const navigate = useNavigate();
  const successLogin = () => toast.success("ورود با موفقیت انجام شد");
  const failedLogin = () => toast.error("ورود ناموفق، دوباره سعی کنید");

  const RoutePageHandler = () => {
    navigate("/dashboard");
    successLogin();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    console.log(data);
    try {
      const response = await Login(data);
      if (response.token) {
        console.log("ورود موفقت آمیز");
        RoutePageHandler();
      }
    } catch (e) {
      console.log(e);
      failedLogin();
    }
  };

  return (
    <>
      <div className="loginPage">
        <div className="loginPage__container">
          <h3>لطفا نام کاربری و رمز عبور خودرا وارد کنید</h3>
          <form
            id="login"
            action={handleSubmit}
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
