import { Button } from "../Button/Button";
import { useSelector,useDispatch } from "react-redux";
import { handlerModal } from "../../appRedux/features/menu/managementMenu";

export const Modal = () => {
  const modalState = useSelector((state) => state.menu.activeModal);
  const dispatch = useDispatch();
  const ncHandler = () => {
    dispatch(handlerModal());
    console.log(modalState);
  };
  console.log(modalState);
  return (
    <div className={`${modalState ? "modalActive" : "modalDeactive"}`}>
      <div className="modalActive__container">
        <div className="modalActive__container__text">
          <p>آیا از فاکتور وارد شده مطمئن هستید ؟</p>
          <p>برای تایید نهایی روی دکمه بله کلیک کنید</p>
        </div>
        <div className="modalActive__container__buttons">
          <Button text="خیر" type="success" size="normal" Click={()=>ncHandler()} />
          <Button text="بله" type="danger" size="normal" />
        </div>
      </div>
    </div>
  );
};
