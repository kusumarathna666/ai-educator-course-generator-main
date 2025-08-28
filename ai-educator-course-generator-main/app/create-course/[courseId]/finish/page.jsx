"use client";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import CourseBasicInfo from "../_components/CourseBasicInfo";
import { useRouter, useParams } from "next/navigation"; // ✅ Import useParams
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

function FinishScreen() {
  const { user } = useUser();
  const params = useParams(); // ✅ Unwrap params using useParams()
  const [course, setCourse] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (params?.courseId && user) {
      GetCourse();
    }
  }, [params, user]);

  const GetCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, params.courseId), // ✅ Now params is properly accessed
            eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );

      setCourse(result[0]);
      console.log(result);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  return (
    <div className="px-10 md:px-20 lg:px-44 my-7">
      <h2 className="text-center font-bold text-2xl my-3 text-primary">
        Congrats! Your course is Ready
      </h2>

      <CourseBasicInfo course={course} refreshData={() => console.log()} />

      <h2 className="mt-3">Course URL:</h2>
      <h2 className="text-center text-gray-400 border p-2 round flex gap-5 items-center">
        https://ai-educator-course-gen.vercel.app/course/{course?.courseId}
        <HiOutlineClipboardDocumentCheck
          className="h-5 w-5 cursor-pointer"
          onClick={async () =>
            await navigator.clipboard.writeText(
              `https://ai-educator-course-gen.vercel.app/course/${course?.courseId}`
            )
          }
        />
      </h2>
    </div>
  );
}

export default FinishScreen;
