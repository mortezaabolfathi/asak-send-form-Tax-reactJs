import React, { useEffect, useState } from "react";
import { PATHS } from "../configs/routes.config";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRtoutes } from "./protected.routes";
import { PublicRtoutes } from "./public.routes";
import { Layout } from "../layout/Layout";
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
      <Routes>
        <Route element={<PublicRtoutes />}>
          {welcome === true ? (
            <Route path={PATHS.HOME} element={<WelcomePage />} />
          ) : (
            <Route path={PATHS.HOME} element={<LoginPage />} />
          )}

          <Route path={PATHS.LOGIN} element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRtoutes />}>
          <Route path="/dashboard" element={<Layout />}>
            <Route path="uploadExcel" element={<UploadExcel />} />
            <Route path="taxSetting" element={<TaxSetting />} />
          </Route>
          <Route path="tableExcel" element={<TableExcel />} />
          <Route path="tableExcel" element={<CompleteReportExcel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
