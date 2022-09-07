import scss from "./Header.module.scss";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useState } from "react";
import { logout } from "modules/Authentication/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const headMenu = [
  { nameLink: "Lịch chiếu", id: "lichchieu" },
  { nameLink: "Cụm rạp", id: "cumrap" },
  { nameLink: "Tin tức", id: "tintuc" },
  { nameLink: "Ứng dụng", id: "ungdung" },
];
const Header = () => {
  const [isMobile, setMobile] = useState(false);
  const handleMobile = () => setMobile(!isMobile);
  const handleClose = () => setMobile(false);
  // logic
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className={scss.mainHeader}>
      <div className={scss.HeaderDT}>
        <Link className={scss.Logo} to="/">
          Dr. LoGo
        </Link>
        <div className={scss.Navbar}>
          {headMenu.map((link) => (
            <span key={link.id} className={scss.itemMenu}>
              {link.nameLink}
            </span>
          ))}
        </div>
        <div className={scss.user}>
          {user ? (
            <div className={scss.Auth}>
              <div className={scss.authItem}>
                <Avatar
                  className={scss.Avatar}
                  src="https://s.luyengame.net/games/pikachu/image.jpg"
                />
                <span>{user.hoTen}</span>
              </div>
              <Link to="/" className={scss.authItem} onClick={handleLogout}>
                <Avatar
                  className={scss.Avatar}
                  icon={<UserOutlined style={{ color: "#fff" }} />}
                />
                <span>Logout</span>
              </Link>
            </div>
          ) : (
            <div className={scss.Auth}>
              <Link to="/login" className={scss.authItem}>
                <Avatar
                  className={scss.Avatar}
                  icon={<UserOutlined style={{ color: "#fff" }} />}
                />
                <span>Login</span>
              </Link>
              <Link to="/register" className={scss.authItem}>
                <Avatar
                  className={scss.Avatar}
                  icon={<UserOutlined style={{ color: "#fff" }} />}
                />
                <span>register</span>
              </Link>
            </div>
          )}
        </div>
        <div className={scss.iconBar} onClick={handleMobile}>
          {isMobile ? <VscChromeClose /> : <VscMenu />}
        </div>
      </div>
      {/* mobile */}

      <div className={isMobile && scss.HeaderMB} onClick={handleMobile}>
        <div className={isMobile && scss.overlay}></div>
        <div className={scss.NavbarMB}>
          {headMenu.map((link) => (
            <span key={link.id} className={scss.itemMenu}>
              {link.nameLink}
            </span>
          ))}
        </div>

        <div className={scss.userMB}>
          {user ? (
            <div className={scss.Auth}>
              <div className={scss.authItem}>
                <Avatar
                  className={scss.Avatar}
                  src="https://s.luyengame.net/games/pikachu/image.jpg"
                />
                <span>{user.hoTen}</span>
              </div>
              <Link to="/" className={scss.authItem} onClick={handleLogout}>
                <Avatar
                  className={scss.Avatar}
                  icon={<UserOutlined style={{ color: "#fff" }} />}
                />
                <span>Logout</span>
              </Link>
            </div>
          ) : (
            <div className={scss.Auth}>
              <Link to="/login" className={scss.authItem}>
                <Avatar
                  className={scss.Avatar}
                  icon={<UserOutlined style={{ color: "#fff" }} />}
                />
                <span>Login</span>
              </Link>
              <Link to="/register" className={scss.authItem}>
                <Avatar
                  className={scss.Avatar}
                  icon={<UserOutlined style={{ color: "#fff" }} />}
                />
                <span>register</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
