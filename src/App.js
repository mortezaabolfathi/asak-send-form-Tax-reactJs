import {Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./layout/Layout";
import UploadExcel from "./pages/UploadExcel/UploadExcel";
import TaxSetting from "./pages/TaxSetting/TaxSetting";
import TableExcel from "./pages/TableExcel/TableExcel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<Layout/>}>
        <Route path="uploadExcel" element={<UploadExcel/>}/>
        <Route path="taxSetting" element={<TaxSetting/>}/>
      </Route>
      <Route path="tableExcel" element={<TableExcel/>}/>
    </Routes>
  );
}

export default App;
