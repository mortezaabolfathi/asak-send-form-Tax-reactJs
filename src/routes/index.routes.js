import React, { useEffect, useState } from "react";
import { PATHS } from "../configs/routes.config";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRtoutes } from "./protected.routes";
import { PublicRtoutes } from "./public.routes";
import { LayOut } from "../layOut/LayOut";
import {
  WelcomePage,
  LoginPage,
  UploadExcel,
  TaxSetting,
  TableExcel,
  CompleteReportExcel,
} from "../pages";

export function AppRouting() {
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWelcome(!welcome);
    }, 3000);
  }, []);

  
  return (
    <BrowserRouter>
      {/* <Routes> */}
      {/* <Route path={PATHS.HOME} element={<WelcomePage />} /> */}
        {/* <PublicRtoutes /> */}
        {/* {welcome === true ? (
          <Route path={PATHS.HOME} element={<WelcomePage />} />
        ) : (
          <Route path={PATHS.LOGIN} element={<LoginPage />} />
        )} */}

        {/* <ProtectedRtoutes>
          <Route path={PATHS.DASHBOARD} element={<LayOut />}>
            <Route path={PATHS.UPLOAD_EXCEL} element={<UploadExcel />} />
            <Route path={PATHS.TAX_SETTING} element={<TaxSetting />} />
          </Route>
          <Route path={PATHS.TABLE_EXCEL} element={<TableExcel />} />
          <Route
            path={PATHS.COMPLeTE_REPORT_EXCEL}
            element={<CompleteReportExcel />}
          />
        </ProtectedRtoutes> */}
      {/* </Routes> */}
    </BrowserRouter>
  );
}
