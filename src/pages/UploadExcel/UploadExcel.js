import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
const UploadExcel = () => {

    const navigate = useNavigate()

    const RoutePageHandler = () => {
        navigate("/tableExcel")
    }

    const [files, setFiles] = useState(null);

    const inputRef = useRef();
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };


    return (
        <div className="uploadExcel">
            <div className="uploadExcel_text">
                <h3>لطفا فایل اکسل خود را بارگذاری کنید</h3>
            </div>
            <div className="uploadExcel_upload_box">
                <h3>اینجا فایل اکسل بارگذاری شود</h3>
            </div>
            <Button text={"تایید"} size={"normal"} Click={() => RoutePageHandler()} />
        </div>
    );
}

export default UploadExcel;