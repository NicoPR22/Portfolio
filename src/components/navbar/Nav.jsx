import React from "react";
import "./Nav.css";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiToolsFill } from "react-icons/ri";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActive("#");
        }}
        className={active === "#" ? "active" : ""}
      >
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActive("#about");
        }}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => {
          setActive("#skills");
        }}
        className={active === "#skills" ? "active" : ""}
      >
        <RiToolsFill />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setActive("#portfolio");
        }}
        className={active === "#portfolio" ? "active" : ""}
      >
        <HiOutlineBookOpen />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActive("#contact");
        }}
        className={active === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
