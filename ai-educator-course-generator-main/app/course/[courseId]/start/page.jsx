"use client";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import ChapterListCard from "./_components/ChapterListCard";
import ChapterContent from "./_components/ChapterContent";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

function CourseStart({ params }) {
  const [course, setCourse] = useState();
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [chapterContent, setChapterContent] = useState();

  useEffect(() => {
    if (params) {
      GetCourse();
    }
  }, [params]);

  /**
   * Used to get Course Info by Course Id
   */
  const GetCourse = async () => {
    try {
      const courseParams = await params;
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList?.courseId, courseParams?.courseId));

      setCourse(result[0]);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const GetSelectedChapterContent = async (chapterId) => {
    try {
      if (!course) return;
      const result = await db
        .select()
        .from(Chapters)
        .where(
          and(
            eq(Chapters.chapterId, chapterId),
            eq(Chapters.courseId, course?.courseId)
          )
        );

      setChapterContent(result[0]);
      console.log(result);
    } catch (error) {
      console.error("Error fetching chapter content:", error);
    }
  };

  return (
    <div>
      {/* Chapter list Side Bar */}
      <div className="fixed md:w-72 hidden md:block h-screen border-r shadow-sm">
        <h2 className="font-medium text-lg bg-primary p-4 text-white">
          {course?.courseOutput?.course?.name}
        </h2>

        <div>
          {course?.courseOutput?.course?.chapters?.map((chapter, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:bg-purple-50 ${
                selectedChapter?.name === chapter?.name && "bg-purple-100"
              }`}
              onClick={() => {
                setSelectedChapter(chapter);
                GetSelectedChapterContent(index);
              }}
            >
              <ChapterListCard chapter={chapter} index={index} />
            </div>
          ))}
        </div>

        {/* Display course URL once after all chapters */}
        {course?.courseId && (
          <div className="mt-4 p-4 border-t">
            <h2 className="text-center text-primary border p-2 rounded flex gap-5 items-center">
              Share Course
              <HiOutlineClipboardDocumentCheck
                className="h-5 w-5 cursor-pointer"
                onClick={async () =>
                  await navigator.clipboard.writeText(
                    `https://ai-educator-course-gen.vercel.app/course/${course.courseId}`
                  )
                }
              />
            </h2>
          </div>
        )}
      </div>

      {/* Content Div */}
      <div className="md:ml-72">
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
      </div>
    </div>
  );
}

export default CourseStart;
