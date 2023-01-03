import React, { useState, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import { CheckUserExpired } from "../utils/functions.util";
import { PATHS } from "../configs/routes.config";
import { WelcomePage, LoginPage } from "../pages";


export const PublicRtoutes = () => {
  const [welcome, setWelcome] = useState(true);

  const location = useLocation();
  useEffect(() => {
    CheckUserExpired("public");
  }, [location]);
  useEffect(() => {
    setTimeout(() => {
      setWelcome(!welcome);
    }, 3000);
  }, []);

  return (
    <>
      {welcome === true ? (
        <Route path={PATHS.HOME} element={<WelcomePage />} />
      ) : (
        <Route path={PATHS.LOGIN} element={<LoginPage />} />
      )}
    </>
  );
};
