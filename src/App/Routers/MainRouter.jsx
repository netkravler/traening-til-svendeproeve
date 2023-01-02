import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import { MainPagesArr } from "./MainPagesArr";

const MainRouter = () => {
  return (
    <Routes>
      {MainPagesArr.map((item, i) => (
        <Route path={item.path} element={item.element} key={i} />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouter;
