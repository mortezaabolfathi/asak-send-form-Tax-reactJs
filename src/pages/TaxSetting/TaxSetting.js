import { Button } from "../../components";
import { Input } from "../../components";

const TaxSetting = () => {

    const handelTaxSetting = () =>{
        console.log("accept");
    }

    return ( 
        <div className="taxSetting">
            <div className="taxSetting_text">
                <h3>تنظیمات مالیاتی</h3>
            </div>
            <div className="taxSetting_content">
                <div className="taxSetting_content_input">
                    <label>شماره حافظه مالیاتی</label>
                    <Input />
                </div>
                <Button text={"تایید"} size={"normal"} type={"official"}/>
                <Button text={"دانلود کنید"} size={"normal"} type={"official"}/>
            </div>
        
        <Button text={"فعال سازی"} size={"free"} type={"dark"} Click={() => handelTaxSetting()} />
    </div>
     );
}
 
export default TaxSetting;