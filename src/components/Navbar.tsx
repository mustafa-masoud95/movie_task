import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const closeMenu = (e: any) => {
      const el = btnRef?.current;
      if (!el || el.contains(e.target.value)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", closeMenu);

    return () => document.body.removeEventListener("click", closeMenu);
  }, [open]);
  return (
    <div className="sticky top-0 bg-dark shadow-md  flex w-full z-40 pt-12 pl-4 justify-between ">
      <div
        className="flex w-fit mb-4   h-full gap-8"
        style={{ borderBottom: ".2px solid #6363637b" }}
      >
        <Link
          to="/movie"
          className="hover:border-b-4  hover:text-gray-100 hover:border-#fff hover:transition duration-150 ease  "
        >
          <h3>Moives</h3>
        </Link>
        <Link
          to="/tv"
          className="hover:border-b-4 hover:text-gray-100  hover:border-#fff hover:transition duration-150 ease "
        >
          <h3>TV </h3>
        </Link>
      </div>
      <div className="pr-4 text-2xl  flex md:hidden lg:hidden xl:hidden">
        <button ref={btnRef} onClick={() => setOpen((prev) => !prev)}>
          <GiHamburgerMenu />
        </button>
      </div>
      {open ? <MobileMenu /> : null}
    </div>
  );
};

export default Navbar;
