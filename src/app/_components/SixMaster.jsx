import { Skeleton } from '@/components/ui/skeleton';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa";




function SixMaster({courses,complete}) {

  const {user} = useUser();
  const Hover_animation = {
    transition: `all 2.5s cubic-bezier(0.19, 1, 0.22, 1)`

  } 



  useEffect(()=>{
    if (Array.isArray(courses) && courses.length > 0) {
      //console.log('First Course:', courses[0].thumb.url);
      //console.log('First Course:', courses[0].state);
    } else {
      
      //console.log(courses)
      console.log('Courses array is empty or not defined');
    }

  },[courses]) 

//md:grid-cols-2 lg:grid-cols-3 min-[1024px]:grid-cols-2                                                                                            grid-cols-1 min-[1024px]:grid-cols-2 min-[1440px]:grid-cols-3                                                                          
  return (
    <div className={`select-none w-[90%] relative  z-0 py-5   justify-center items-center ${courses.length > 0 ? 'px-10 grid gap-x-5 gap-y-10  grid-cols-1 min-[870px]:grid-cols-2 min-[1331px]:grid-cols-3 ': ''} `}>
                                                    
      { 
        Array.isArray(courses) && courses.length > 0 ? 
          (
            
            courses.map((course,index) => (
              <Link 
                key={course.idOfCourse} 
                href={{ 
                  //pathname: `/courses/${course.slug}`, 
                  pathname: `${course.slug}`, 
                  query: { id: course.idOfCourse } 
                }} 
                onClick={
                  (e) => {
                    if(!course.state) 
                      e.preventDefault();
                  }
                }
                

                className={`group select-none relative overflow-hidden rounded-[20px] 
                  transition-all ease-in-out duration-500
                  ${course.state ? 'cursor-pointer' : 'cursor-none'}
                  hover:translate-y-[-10px] hover:shadow-xl
                `}
              >
              <div className='h-[600px] w-[200px]  absolute top-0 translate-x-[-300px] z-[999]
                skew-x-[-30deg] blur-[30px] bg-blend-lighten
                 bg-gradient-to-r from-[#ffffffd5] from-50% via-white via-30% to-[#f0c5ad52] to-80%
                 group-hover:translate-x-[800px] 
              '
                style={Hover_animation}
              ></div>
              
              <div key={course.idOfCourse} className='relative flex justify-center bg-white h-[100%] rounded-[20px] cursor-pointer
                
                bg-gradient-to-t from-black from-20% to-[#ffffffc7]
                overflow-hidden'>
                  <div className="status  bg-white text-black text-sm font-bold px-3 rounded-[20px] 
                    absolute flex justify-start items-center gap-2 top-[20px] left-[20px] z-[999] 
                  ">
                      <div className={`circle  ${course.state ? ' animate-sign-soon' : 'opacity-35'}
                       w-[8px] h-[8px]  backdrop-blur-10 rounded-xl sha `}></div>
                      <div>
                        {course.state ? 'new' : 'soon'}
                      </div>
                    </div>
                  
                  <Image
                  className={`w-[800px] h-[500px] object-cover mix-blend-multiply transition-all ease-in-out duration-300 
                      ${course.state ? null : ' blur-[10px] ' }
                    `}
                    src={`/img-${index+1}.png`===`/img-1.png`? `/img-1.png`:`/img-${index+1}.jpg`}
                    alt={course.slug}
                    width={600}
                    height={600}
                    priority={true}
                  />
                  <div className="footer  w-full flex flex-col justify-center items-center px-5 absolute bottom-5 ">
                      <div className=" w-full flex flex-col   mb-5 " >
                      
                          <div className='w-full flex justify-between items-center'>
                            <div className="title font-bold text-[2rem]">{course.title}</div>
                            <FaArrowRight size={25}/>
                          </div>
                          <div className="description w-[200px] min-[452px]:w-[300px]  text-sm font-extralight  line-clamp-2">{course.description}</div>
                        
                        </div>
                      
                      <div className={`w-full flex-col justify-center gap-1 ${user? 'flex' : 'hidden'}`}>
                        {/* <div>{complete? complete[index] : '0'}%</div> */}
                        <div className="relative w-full h-[10px] bg-white/20 rounded-sm overflow-hidden">
                          <div 
                            className={`score  h-full bg-white transition-all duration-200 `}
                            style={{ width: `${complete?.[index] || 0}%` }} 
                          ></div>
                        </div>
                        
                      </div>
                  </div>
                  
                </div>
              </Link>
            ))

          ) :

          (
            <div className='w-full  py-5 px-5 grid gap-x-5 gap-y-10 justify-center items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <Skeleton className='w-full h-[400px] rounded-[10px]' ></Skeleton>
              <Skeleton className='w-full h-[400px] rounded-[10px]' ></Skeleton>
              <Skeleton className='w-full h-[400px] rounded-[10px]' ></Skeleton>
              <Skeleton className='w-full h-[400px] rounded-[10px]' ></Skeleton>
              <Skeleton className='w-full h-[400px] rounded-[10px]' ></Skeleton>
              <Skeleton className='w-full h-[400px] rounded-[10px]' ></Skeleton>
            </div>
            
          )
          
      }
       

    </div>
  )
}

export default SixMaster