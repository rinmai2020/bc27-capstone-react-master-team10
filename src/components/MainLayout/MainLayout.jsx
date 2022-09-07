import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from "../Header";
import scss from "./MainLayout.module.scss";
import Footer from "components/Footer/Footer";
const MainLayout = () => {
  return (
    <Layout>
      <Layout.Header className={scss.Header}>
        <Header />
      </Layout.Header>
      <Layout.Content className={scss.Content}>
        {/* Nơi chứa component được định nghĩa trong router */}

        {/* component Outlet sẽ là nơi render ra các children route  */}
        <Outlet />
      </Layout.Content>
      <Layout.Footer className={scss.Footer}>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default MainLayout;
