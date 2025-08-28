import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="px-10 md:px-20 lg:px-44 ">
      <div className="grid grid-cols-2 gap-10">
        {/* Difficulty Level */}
        <div className="">
          <label className="text-sm">Difficulty level</label>
          <Select onValueChange={(value) => handleInputChange("level", value)}
            defaultValue={userCourseInput?.level}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Duration */}
        <div className="">
          <label className="text-sm">Course Duration</label>
          <Select onValueChange={(value) => handleInputChange("duration", value)}
            defaultValue={userCourseInput?.duration}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 hour">1 hour</SelectItem>
              <SelectItem value="2 hours">2 hours</SelectItem>
              <SelectItem value="more than 3 hours">more than 3 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add Video Option */}
        <div className="">
          <label className="text-sm">Add Video</label>
          <Select onValueChange={(value) => handleInputChange("displayVideo", value)}
            defaultValue={userCourseInput?.displayVideo}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Number of Chapters */}
        <div className="">
          <label className="text-sm">No of chapters</label>
          <Input
            type="number"
            className=""
            defaultValue={userCourseInput?.noOfChapter}
            onChange={(event) => handleInputChange("noOfChapter", event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
