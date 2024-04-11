import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { motion, useAnimationControls } from "framer-motion";

const navList = [
  {
    label: "Trang chủ",
    url: "/",
  },
  {
    label: "Giới thiệu",
    url: "/about-us",
  },
  {
    label: "Hợp đồng",
    url: "/contract",
  },
  {
    // label: "Tài liệu",
    label: "Tiến độ",
    url: "/document",
  },
  {
    label: "Đồ án",
    url: "/project",
  },
  // {
  //   label: "Timeline",
  //   url: "/timeline",
  // },
  {
    label: "Liên hệ",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav
      className="fixed z-[2] top-0 w-full h-[5rem] flex flex-row items-center"
      style={{ background: "linear-gradient(263deg, #ac4344 0%,#c5274b 100%)" }}
    >
      <Link to="/" className="ml-[5%] w-max h-full flex flex-row items-center">
        <img
          src="/assets/tomato.png"
          alt=""
          className="h-full p-1"
          loading="eager"
        />
        <strong className="text-white text-[2rem] font-block uppercase">
          Tomato
        </strong>
      </Link>
      <div className="hidden lg:flex mx-auto flex-row items-center gap-6">
        {navList.map((navItem, index) => (
          <NavLink
            key={index}
            to={navItem.url}
            className="text-white text-[1.25rem] hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
            style={({ isActive }) => ({
              color: "white",
              fontWeight: isActive ? "700" : "600",
              background: isActive
                ? "linear-gradient(322deg, rgb(210, 63, 44) 0%, rgb(244, 191, 12) 100%)"
                : "transparent",
              padding: isActive ? "0.5rem 1.5rem" : "0 0",
              borderRadius: isActive ? "6.25rem" : "",
            })}
          >
            {navItem.label}
          </NavLink>
        ))}
      </div>
      <MobileDrawer />
    </nav>
  );
};

export default Navbar;

const MobileDrawer = () => {
  const [state, setState] = React.useState(false);
  const containerControls = useAnimationControls();

  React.useEffect(() => {
    if (state) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [state]);

  const containerVariants = {
    close: {
      width: "0",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
    open: {
      width: "16.5rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const handleOpenClose = () => {
    setState(!state);
  };
  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={() => handleOpenClose()}
        className="absolute right-[4%] !z-[5000]"
      >
        <Hamburger size={28} color={state ? "#333" : "#FFF"} toggled={state} />
      </button>
      <motion.div
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="absolute z-[2000] top-0 right-0 h-screen bg-white shadow-[-50px_0_300px_0px_rgba(51,51,51,.8)]"
      >
        <div className="h-[5rem] border-b border-solid border-[#333]/10" />
        <div className="pt-4 px-[1.875rem]">
          <motion.ul
            animate={state ? "text-[0.875rem]" : "text-[0]"}
            className="flex flex-col space-y-4"
          >
            {navList.map((item, index) => (
              <li
                key={index}
                className="flex-shrink-0 overflow-hidden h-[2rem] flex items-center"
              >
                <Link
                  to={item.url}
                  onClick={() => handleOpenClose()}
                  className="h-[1.5rem] text-[#231916] font-semibold text-clip overflow-hidden"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
          <div className="my-[1.125rem] w-full h-px bg-[#333]/10" />
        </div>
      </motion.div>
    </div>
  );
};
