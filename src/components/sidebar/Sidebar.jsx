import React, { useState } from "react";
import { Data } from "../../data/dummy";
import { toggleCategories } from "../../redux/toggle/toggleSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { toggleCategory } = useSelector((state) => state.toggle);
  const [activeIcon, setActiveIcon] = useState("fa-solid fa-chart-pie");
  const [actiiveCategory, setActiveCategory] = useState(Data[0].inside[0].text);
  const [category, setCategory] = useState(Data[0].inside);

  const handleClickedIcon = (iconName) => {
    if (iconName.icon === activeIcon) {
      dispatch(toggleCategories(!toggleCategory));
    } else {
      dispatch(toggleCategories(true));
      setActiveIcon(iconName.icon);
    }

    setCategory(iconName.inside);
    setActiveCategory(iconName.inside[0].text);
  };

  console.log(Data);

  console.log(actiiveCategory);

  return (
    <div className="h-full flex">
      <div className="flex-col h-[100vw] p-6 flex gap-8 text-white bg-black">
        {Data.map((icon, index) => {
          return (
            <div
              key={index}
              onClick={(r) => handleClickedIcon(icon)}
              className={`p-3.5 ${
                activeIcon === icon.icon
                  ? " text-white bg-gradient-to-bl from-amber-500 to-pink-500"
                  : "text-neutral-400"
              }`}
            >
              <i className={`${icon.icon}`}></i>
            </div>
          );
        })}
      </div>

      <div
        className={`w-56 ${
          toggleCategory ? "block" : "hidden"
        } flex-col flex gap-4`}
      >
        {category.map((cat, idx) => {
          return <div key={idx}>{cat.text}</div>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
