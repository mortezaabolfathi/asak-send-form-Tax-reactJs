import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../../components";
import img from "./../../assets/image/icons8-downloading-updates-100.png";

const UploadExcel = ({ onDrop, accept }) => {
  const [file, setFile] = useState(null);
  const [acceptButton, setAcceptButton] = useState(true)

  const navigate = useNavigate();

  const RoutePageHandler = () => {
    navigate("/tableExcel");
  };
  const closePage = () => {
    navigate("/dashboard");
  };

  const { getRootProps, getInputProps, isDragActive, open, acceptedFiles } =
    useDropzone({
      onDrop:(acceptedFiles)=>{
        setFile(acceptedFiles[0])
        setAcceptButton(false)
    },
      accept: {
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
          ".xlsx",
        ],
      },
      maxFiles: 1,
    });


  return (
    <>
    <div className="close-page" onClick={()=>closePage()}></div>
    <div className="uploadExcel">
      <h3>لطفا فایل اکسل خود را بارگذاری کنید</h3>
        <div className="uploadExcel_upload_box" {...getRootProps()}>
          <input className="dropzone-input" {...getInputProps()} />
          {isDragActive ? (
            <h4 className="dropzone-content"> فایل را رهانمایید</h4>
          ) : (
            <>
              <h4 className="dropzone-content">
                فایل خود را اینجا بارگذاری کنید
              </h4>
            </>
          )}
          <img src={img} />
        </div>
      <aside className="dropzone_file">
        <h4>نام فایل بارگذاری شده :</h4>
        {file ? <div>{`${file.path} - ${file.size} bytes`}</div> : "" }
        
      </aside>

      <Button
        text={"تایید"}
        size={"normal"}
        type={"official"}
        Click={() => RoutePageHandler()}
        disabled={acceptButton}
      />
    </div>
    </>
  );
};

export default UploadExcel;
