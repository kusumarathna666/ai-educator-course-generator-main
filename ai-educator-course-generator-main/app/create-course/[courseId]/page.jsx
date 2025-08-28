"use client";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/schema";
import React, { useEffect, useState } from "react";
import { and, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { useParams, useRouter } from "next/navigation"; // ✅ Import useParams
import { Button } from "@/components/ui/button";
import {
  GenerateChapterContent_AI,
  GenerateCourseLayout_AI,
} from "@/configs/AiModel";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import LoadingDialog from "../_components/LoadingDialog";
import service from "@/configs/service";

function CourseLayout() {
  const { user } = useUser();
  const params = useParams(); // ✅ Unwrap params using useParams()
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (params?.courseId && user) {
      GetCourse();
    }
  }, [params, user]);

  const GetCourse = async () => {
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
  };

  const GenerateChapterContent=async()=>{
    setLoading(true);
    const chapters=course?.courseOutput?.course?.chapters;
    await chapters.forEach(async(chapter,index)=>{
    setLoading(true);

      const PROMPT='Explain the concept in Detail on Topic:'+course?.name+', Chapter:'+chapter?.name+', in JSON Format with list of array with field as title, description in detail, Code Example(Code field in <precode> format) if applicable';
      console.log(PROMPT)
      // if(index<3)
      // {
          try{
            let videoId='';

            //Generate Video URL
          await service.getVideos(course?.name+':'+chapter?.name).then(resp=>{
              videoId=resp[0]?.id?.videoId;
              console.log(resp);
            })
            //generate chapter content
              const result=await GenerateChapterContent_AI.sendMessage(PROMPT);
              // console.log(result?.response?.text());
              const content=JSON.parse(result?.response?.text())
              
              // Save Chapter Content + Video URL
             const resp= await db.insert(Chapters).values({
                 chapterId:index,
                 courseId:course?.courseId,
                 content:content,
                 videoId:videoId
              }).returning({id:Chapters.id})
              console.log(resp)
              setLoading(false)
          }catch(e)
          {
            setLoading(false);
            console.log(e)
          }
          await db.update(CourseList).set({
            publish:true
          })

         if(index==chapters?.length-1) 
         {
          router.replace('/create-course/'+course?.courseId+"/finish")
         }
      //  }

    })
  }
  

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>
      <LoadingDialog loading={loading} />
      <CourseBasicInfo course={course} />
      {/* Course Detail */}
      <CourseDetail course={course} />
      {/* List of Lessons */}
      <ChapterList course={course} refreshData={GetCourse} />

      <Button onClick={GenerateChapterContent} className="my-10">
        Generate Course Content
      </Button>
    </div>
  );
}

export default CourseLayout;
