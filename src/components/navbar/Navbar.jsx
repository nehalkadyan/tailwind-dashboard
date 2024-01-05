import React from "react";
import { FaWalking } from "react-icons/fa";
import { MdDining } from "react-icons/md";
import { toggleSidebar } from "../../redux/toggle/toggleSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="w-full h-[76px]  flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="w-24 h-18 border-r border-neutral-200">
          <img
            className="pr-6"
            src="https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div
          onClick={handleToggle}
          className="text-xl font-medium cursor-pointer"
        >
          Dashboard
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 rounded-full border border-neutral-200 px-4 py-2">
          <div className="cursor-pointer pr-4 flex gap-4 items-center border-r border-neutral-200">
            <div>
              <FaWalking className="text-orange-400" />
            </div>

            <div>Walk-In</div>
          </div>

          <div className=" cursor-pointer flex gap-4 items-center">
            <div>
              <MdDining className="text-orange-400" />
            </div>

            <div>Walk-In</div>
          </div>
        </div>

        <div className="h-12 w-12">
          <img
            className="rounded-full"
            src="https://images.pexels.com/users/avatars/891482908/nehal-kadyan-933.png?auto=compress&fit=crop&h=130&w=130&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
