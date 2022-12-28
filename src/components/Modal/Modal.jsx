import { Loading } from "../Loading/Loading";
import { Button } from "../Button/Button";

export const Modal = ({type="loading" , active=true })=>{
    return(
        <div className={`${active === true ? "modalActive" : "modal"}`}>
            {type === "loading" ? <Loading/>: <div className="modalActive__container">
                <div className="modalActive__container__text">
                <p>آیا از فاکتور وارد شده مطمئن هستید ؟</p>
                <p>برای تایید نهایی روی دکمه بله کلیک کنید</p>
                </div>
                <div className="modalActive__container__buttons">
                    <Button text="خیر" type="success" size="normal"/>
                    <Button text="بله" type="danger" size="normal"/>
                </div>

            </div> }
        </div>
    )
}