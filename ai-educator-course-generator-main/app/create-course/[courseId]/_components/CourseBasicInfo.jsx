import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { HiBookOpen } from "react-icons/hi";
import EditCourseBasicInfo from "./EditCourseBasicInfo";
import { Edit } from "lucide-react";
import Link from "next/link";

function CourseBasicInfo({ course }) {
  const [selectedFile, setSelectedFile] = useState();

  const onFileSelected = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="">
          <h2 className="font-bold text-2xl">
            {course?.courseOutput?.course?.name}
            {/* <EditCourseBasicInfo/> */}
          </h2>
          <p className="text-sm text-gray-400 mt-3 ">
            {course?.courseOutput?.course?.description}
          </p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
            <HiBookOpen />
            {course?.category}
          </h2>
          <Link href={"/course/" + course?.courseId + "/start"}>
            <Button className="w-full mt-5">Start</Button>
          </Link>
        </div>
        <div>
          <label htmlFor="upload-image">
            <Image
              src={selectedFile ? selectedFile : "/placeholder.png"}
              width={300}
              height={300}
              className="w-full rounded-xl h-[250px] object-cover cursor-pointer"
              alt="banner"
            />
          </label>
          {Edit && (
            <input
              type="file"
              id="upload-image"
              className="opacity-0"
              onChange={onFileSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseBasicInfo;
