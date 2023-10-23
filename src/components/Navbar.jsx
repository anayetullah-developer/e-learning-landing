import { Navbar } from "flowbite-react";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function NavbarWithCTAButton() {
  return (
    <Navbar rounded>
      <div className="flex items-center gap-2 text-3xl">
        <PiPaperPlaneTiltFill className="text-[#26C468]"/>
        <div className="brand-logo text-xl font-bold text-[#333333]  tracking-wider">E-Coaching</div>
      </div>
      <div className="flex md:order-2">
        <div className="flex gap-8 items-center text-2xl cursor-pointer">
          <IoCartOutline/>
        <button
          type="button"
          className="flex items-center gap-1 py-1.5 px-3 mr-2 mb-2 text-white focus:outline-none  bg-[#26C468] rounded border border-[#26C468] hover:bg-[#3b9c64] hover:text-white"
        >
          <GoPerson className="text-base" />
          <div className="text-base">Login / Register</div>
        </button>
        </div>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-gray-500">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#26C468]" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "text-[#26C468]" : "")}
        >
          Services
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive
              ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
              : "navlink me-md-4 mb-md-0 mb-2 text-dark"
          }
        >
          Popular Courses
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive
              ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
              : "navlink me-md-4 mb-md-0 mb-2 text-dark"
          }
        >
          Top Selling Courses
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive
              ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
              : "navlink me-md-4 mb-md-0 mb-2 text-dark"
          }
        >
          All Courses
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
