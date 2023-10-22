import { Navbar } from "flowbite-react";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function NavbarWithCTAButton() {
  return (
    <Navbar rounded>
      <div className="flex items-center gap-2 text-3xl">
        <PiPaperPlaneTiltFill className="text-[#26C468]"/>
        <div className="brand-logo text-2xl font-bold  tracking-wider">E-Coaching</div>
      </div>
      <div className="flex md:order-2">
        <div className="flex gap-8 items-center text-2xl">
          <IoCartOutline/>
        <button
          type="button"
          className="flex items-center gap-1 py-2.5 px-3 mr-2 mb-2 text-sm font-medium text-white focus:outline-none  bg-[#26C468] rounded border border-[#26C468] hover:bg-[#3b9c64] hover:text-white"
        >
          <BsPerson className="text-lg" />
          <div>Login / Register</div>
        </button>
        </div>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
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
