import React, { ReactNode, useState } from "react";
import { DashboardOutlined, SearchOutlined, UploadOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import logo from "../../assets/Images/quranDark(1).png";
import "../../assets/css/Style.css";
import { useAppSelector } from "../../redux/hook/hook";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

interface Props {
  children: ReactNode;
}
type MenuItem = Required<MenuProps>["items"][number];

const Layouts: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { darkMode, fonts, fontSize } = useAppSelector(
    (state: RootState) => state.settingReducer
  );
  const items: MenuItem[] = [
    {
      label: <Link to={'/Dashboard'}>Dashboard</Link>,
      key: "1",
      icon: <DashboardOutlined />,
      className: "!hover:for-text-white apply-font",
      style: { fontFamily: fonts, fontSize: fontSize },
    },
    {
      label: <Link to={'/Search'}>Search</Link>,
      key: "2",
      icon: <SearchOutlined />,
      className: " apply-font ",
      style: { fontFamily: fonts, fontSize: fontSize },
    },
    {
      label: <Link to={'/rootUpload'}>Upload</Link>,
      key: "3",
      icon: <UploadOutlined />,
      className: " apply-font ",
      style: { fontFamily: fonts, fontSize: fontSize },
    },
  ];



  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        style={{ backgroundColor: darkMode ? "" : "#1C2826" }}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="flex justify-center items-center h-20 ">
          <img
            src={logo}
            className={collapsed ? "h-8" : "h-14"}
            alt="sidebar logo"
          />
        </div>
        <Menu
          className={`pt-5 text-for-text ${
            darkMode ? "bg-dark-blue" : "bg-main-color"
          }`}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className={`${darkMode ? " bg-gray-700" : "bg-white"}`}>
        <Header
          className={` flex justify-center items-center h-10 ${
            darkMode ? "bg-dark-blue" : "bg-main-color"
          }`}
        >
          <h6
            className=" apply-font text-center text-lg text-for-text font-semibold "
            style={{ fontFamily: fonts, fontSize: fontSize }}
          >
            Grammer App
          </h6>
        </Header>
        <Content>
          <div className="p-6">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
