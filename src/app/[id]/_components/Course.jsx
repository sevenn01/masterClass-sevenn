'use client'

import Link from 'next/link'
import React, { useState,useEffect } from 'react'


import VideoList from './VideoList';
import { Skeleton } from '@/components/ui/skeleton';
import { IoIosArrowRoundForward } from "react-icons/io";



function Course({week}) {

    const [course, setCourse] = useState([]);
    const [tools, setTools] = useState([]);
    const [goal,setGoal] = useState('')
    
    useEffect(()=>{
        
        if(week){
            setCourse(week);
            
            //console.log('from C: ',course.link)
            const toolsList = week.tools ? week.tools.text.split('\\n') : [];
            setTools(toolsList); 
            //console.log('tools from course: ',tools)

            const goalText = week.goal ? week.goal.text.replace('\\n', ' ') : '';
            setGoal(goalText); 
            //console.log('goal from course: ',goal)
        }
    },[week])

    
    
    //const [chapter, setChapter] = useState('');

  return (
    <div className='relative w-[90%] py-2 flex flex-col gap-2 justify-center z-0'>
        {
            course && tools.length > 0  ?
            (//min-[460px]:px-5
                <div className='relative  w-full pt-10 pb-10  flex flex-col min-[1412px]:flex-row gap-20 justify-between z-0 ' >
                    <h1 className='title text-orangeColor  font-bold text-nowrap px-0  text-[5rem] min-[433px]:text-[7rem] min-[490px]:text-[8rem]  font-impact uppercase tracking-wider'>
                        {course.title}
                    </h1>
                    <div className="about w-[80%] relative  px-1 py-2 min-[385px]:p-5 grid grid-cols-1 min-[970px]:grid-cols-2 gap-10 min-[970px]:gap-32 ">
                        <div className="goal w-[80vw] min-[460px]:w-[400px]  font-bold flex flex-col gap-1 text-balance">
                            <div className='text-[2rem]'>Goal</div>
                            <div className='font-thin'>
                                {goal}
                            </div>
                        </div>
                        <div className=" font-bold flex flex-col gap-2  ">
                            <div className="tools flex flex-col gap-1 ">
                                <div className='w-[500px] text-[2rem]'>Discord group</div>
                                <Link href='https://discord.com/invite/6E6RkPdQ25'  legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer" className='font-thin flex items-center gap-1'>
                                        Discord Link
                                        <IoIosArrowRoundForward className=' '/>
                                    </a> 
                                </Link>
                                {/*
                                    tools.length > 0 ?
                                    tools.map((tool,id) => (
                                        <li key={id} className='font-thin'>{tool}</li>
                                    )): <div></div>
                                    */
                                }
                            </div>
                            <div className="files font-bold flex flex-col gap-1">
                            <div className=' text-[2rem] '>Download Link</div>
                            <Link href={course.link} className='group first-letter:font-thin ' legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer" className='font-thin flex items-center gap-1'>
                                    Get all assets here
                                    <IoIosArrowRoundForward className=' '/>
                                </a>
                                
                            </Link>
                        </div>
                        </div>
                        
                    </div>
                </div>

            ) :
            (
                <div className='w-full relative  pt-10 pb-5  flex flex-col min-[1250px]:flex-row gap-20 justify-between items-center z-0 '>
                    <Skeleton className='w-[500px] h-[200px] '></Skeleton> 
                    <div className="  relative px-5 grid grid-cols-1 min-[684px]:grid-cols-2 md:grid-cols-2  gap-20 ">
                        <div className="goal w-[300px]  font-bold flex flex-col gap-2 text-balance">
                            <Skeleton className='w-[100px] h-[30px]' ></Skeleton>
                            <Skeleton className='w-[300px] h-[200px]' ></Skeleton>
                        </div>
                        <div className="tools  font-bold flex flex-col gap-2">
                            <Skeleton className='w-[60px] h-[30px]' ></Skeleton>
                            <Skeleton className='w-[300px] h-[20px]' ></Skeleton>
                            <Skeleton className='w-[300px] h-[20px]' ></Skeleton>
                        </div>
                    </div>
                </div>
            )
        }
        

        
    </div>
  )
}

export default Course