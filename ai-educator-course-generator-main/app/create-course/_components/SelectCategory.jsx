
import CategoryList from "@/app/_shared/CategoryList";
import React, { useContext } from "react";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5 font-semibold text-xl">Select the course Category:</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {CategoryList.map((item, index) => {
          const Icon = item.icon; // 👈 Extract the icon
          return (
            <div
              key={index}
              className={`flex flex-col p-5 border items-center
                rounded-xl hover:border-primary
                hover:bg-blue-50 cursor-pointer transition-all
                ${
                  userCourseInput?.category === item.name
                    ? "border-primary bg-blue-50"
                    : ""
                }`}
              onClick={() => handleCategoryChange(item.name)}
            >
              {/* Render Icon here */}
              <Icon className="text-4xl mb-3 text-primary" /> {/* 🔥 Icon added */}
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectCategory;
