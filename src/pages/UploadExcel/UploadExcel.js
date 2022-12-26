import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import img from "./../../assets/image/icons8-downloading-updates-100.png";


const UploadExcel = () => {

    const navigate = useNavigate()

    const RoutePageHandler = () => {
        navigate("/tableExcel")
    }

    return (
        <div className="uploadExcel">
            <div className="uploadExcel_text">
                <h3>لطفا فایل اکسل خود را بارگذاری کنید</h3>
            </div>
            <div className="uploadExcel_upload_box">
                <h3> فایل اکسل در اینجا بارگذاری شود</h3>
                <img src={img} />
            </div>
            <Button text={"تایید"} size={"normal"} type={"official" }Click={() => RoutePageHandler()} />
        </div>
    );
}

export default UploadExcel;