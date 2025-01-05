import { Skeleton } from '@/components/ui/skeleton';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function RelatedWeeks({ courses = [], id }) {
  const { user } = useUser();
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    if (Array.isArray(courses) && courses.length > 0) {
      // Filter out the current course
      const filteredCourses = courses.filter((course) => course.idOfCourse !== id);

      // Select up to 3 random courses
      const randomSelection = filteredCourses.slice(0, 3);

      setSelectedCourses(randomSelection);
    } else {
      console.log('Courses array is empty or not defined');
    }
  }, [courses, id]);

  const HoverAnimation = {
    transition: 'all 2.5s cubic-bezier(0.19, 1, 0.22, 1)',
  };

  return (
    <div className="w-[100%] flex flex-col justify-center items-center min-[487px]:items-start  pt-20">
      {selectedCourses.length > 0 ? (
        <>
          <h1 className="text-white font-bold text-nowrap  min-[487px]:pl-16 pb-10 text-[5rem] min-[433px]:text-[7rem] min-[490px]:text-[8rem] font-impact uppercase">
            Related
          </h1>
  
          <div
            className={`select-none w-full relative z-0 py-5 justify-center items-center ${
              selectedCourses.length > 0
                ? 'px-10 grid gap-x-5 gap-y-10 grid-cols-1 min-[850px]:grid-cols-2 min-[1084px]:grid-cols-3'
                : ''
            }`}
          >
            {selectedCourses.map((course, index) => (
              <Link
                key={course.idOfCourse}
                href={{
                  pathname: `${course.slug}`,
                  query: { id: course.idOfCourse },
                }}
                onClick={(e) => {
                  if (!course.state) e.preventDefault();
                }}
                className={`group select-none relative overflow-hidden rounded-[20px] 
                transition-all ease-in-out duration-500 
                ${course.state ? 'cursor-pointer' : 'cursor-none'} 
                hover:translate-y-[-10px] hover:shadow-xl
                ${index === 2 ? ' min-[850px]:hidden min-[1084px]:inline' : ''}`}
              >
                <div
                  className="h-[600px] w-[200px] absolute top-0 translate-x-[-300px] z-[999]
                  skew-x-[-30deg] blur-[30px] bg-blend-lighten
                  bg-gradient-to-r from-[#ffffffd5] from-50% via-white via-30% to-[#f0c5ad52] to-80%
                  group-hover:translate-x-[800px]"
                  style={HoverAnimation}
                ></div>
  
                <div
                  className="relative flex justify-center bg-white h-[100%] rounded-[20px] cursor-pointer
                  bg-gradient-to-t from-black from-20% to-[#ffffffc7] overflow-hidden"
                >
                  <div
                    className="status bg-white text-black text-sm font-bold px-3 rounded-[20px] 
                    absolute flex justify-start items-center gap-2 top-[20px] left-[20px] z-[999]"
                  >
                    <div
                      className={`circle ${
                        course.state ? 'animate-sign-soon' : 'opacity-35'
                      } w-[8px] h-[8px] backdrop-blur-10 rounded-xl`}
                    ></div>
                    <div>{course.state ? 'new' : 'soon'}</div>
                  </div>
  
                  <Image
                    className={`w-[800px] h-[500px] object-cover mix-blend-multiply transition-all ease-in-out duration-300 ${
                      course.state ? '' : 'blur-[10px]'
                    }`}
                    src={`/img-${(() => {
                      switch (course.title) {
                        case 'Week 1':
                          return '1.png';
                        case 'Week 2':
                          return '2.jpg';
                        case 'Week 3':
                          return '3.jpg';
                        case 'Week 4':
                          return '4.jpg';
                        case 'Week 5':
                          return '5.jpg';
                        default:
                          return '6.jpg';
                      }
                    })()}`}
                    alt={course.slug}
                    width={600}
                    height={600}
                    priority={true}
                  />
  
                  <div className="footer w-full flex flex-col justify-center items-center px-5 absolute bottom-5">
                    <div className="w-full flex flex-col mb-5">
                      <div className="w-full flex justify-between items-center">
                        <div className="title font-bold text-[2rem]">
                          {course.title}
                        </div>
                        <FaArrowRight size={25} />
                      </div>
                      <div className="description w-[200px] min-[452px]:w-[300px] text-sm font-extralight line-clamp-2">
                        {course.description}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="w-[100%] flex flex-col justify-center pt-20">
          <Skeleton className="  w-[30vw] h-[100px] pl-16" />
  
          <div className="w-full py-5 px-5 grid gap-x-5 gap-y-10 justify-between items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                className={`h-[400px] rounded-[10px] 
                  ${index === 2 ? 'min-[850px]:hidden min-[1084px]:inline' : ''}
                `}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
}

export default RelatedWeeks;
