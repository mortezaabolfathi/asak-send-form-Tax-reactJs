import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./layout/Layout";
import UploadExcel from "./pages/UploadExcel/UploadExcel";
import TaxSetting from "./pages/TaxSetting/TaxSetting";
import TableExcel from "./pages/TableExcel/TableExcel";
import { useEffect, useState } from "react";

function App() {
  const [welcome, setWelcome] = useState(true);
  useEffect(() => {
    console.log(welcome);

    setTimeout(() => {
      setWelcome(!welcome);

    }, 3000);

    console.log(welcome);
  }, []);

  return (
    <Routes>
      {welcome ===true ? <Route path="/" element={<WelcomePage />} /> :
      <Route path="/" element={<LoginPage />} />}
      <Route path="/dashboard" element={<Layout />}>
        <Route path="uploadExcel" element={<UploadExcel />} />
        <Route path="taxSetting" element={<TaxSetting />} />
      </Route>
      <Route path="tableExcel" element={<TableExcel />} />
    </Routes>
  );
}

export default App;
