import {Button, Input} from "../../components";
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';

const LoginPage = () => {
    const navigate = useNavigate();
    const successLogin = () => toast.success("ورود با موفقیت انجام شد");
    const failedLogin = () => toast.error("ورود ناموفق");
    const RoutePageHandler = () => {
        navigate("/dashboard");
        successLogin()
    };

    return (
        <>
            <div className="loginPage">
                <div className="loginPage__container">
                    <h3>لطفا نام کاربری و رمز عبور خودرا وارد کنید</h3>
                    <div className="loginPage__container__inputs">
                        <div className="loginPage__container__inputs__user">
                            <label>نام کاربری :</label>
                            <Input type="text" size="large"/>
                        </div>
                        <div className="loginPage__container__inputs__pass">
                            <label>پسورد :</label>
                            <Input type="password" size="large"/>
                        </div>
                    </div>
                    <Button
                        text="وارد شوید"
                        type="official"
                        Click={() => RoutePageHandler()}
                        size="normal"
                    />
                </div>
            </div>
        </>
    );
};

export default LoginPage;
