'use client'
import React, { useCallback, useEffect, useState } from 'react'
import SixMaster from './_components/SixMaster'
import { useUser } from '@clerk/nextjs'
import { checkUserByEmail, fetchUserByEmail } from '@/lib/user'
import Head from './_components/head'
import { createUser } from '@/lib/createUser'





function Courses() {

  const [courses, setCourses] = useState([]);
  const [complete, setComplete] = useState([]);
  const { user } = useUser();

  const checkUserExist =useCallback(async () => {
    
      if(user){
        const email = user?.primaryEmailAddress?.emailAddress;
        const weeksComplete = await fetchUserByEmail(email);
        

        const userId = user?.id;
        const isExist = await checkUserByEmail(email);
        if(!isExist){
          
          const nbUsers = await fetchUserCount();
          if(nbUsers){
            const result = await createUser(email, nbUsers+1);
            if (result) {
                console.log("User created and published successfully", result);
            } else {
                console.log("User creation failed");
            }
          }
        }
        else{
          console.log('Alredy exist: ',isExist)
          console.log('this user already exist !!')
        }




        if(Array.isArray(weeksComplete.completedWeeks)) {
          console.log(weeksComplete.completedWeeks);
          const newCompletes = [];

          weeksComplete.completedWeeks?.forEach(week => {
            let nbOfChp = 0;
            let score = 0;

            week.chapterComplete?.forEach((chap,i)=> {
              nbOfChp += 1;
              if(chap.complete) {
                score += 1;
              
              }
            })
            
            const completionScore = (score === nbOfChp) ? 100 : parseInt((score * 100) / nbOfChp)
            newCompletes.push(completionScore);
          });

          setComplete(newCompletes);
        }else{
          console.error('weeksComplete is not an array', weeksComplete);
        }

      }
        

  },[user])

  useEffect(() => {
    // Fetch the course data from the correct API endpoint
    
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        if(!response.ok){
          throw new Error('Error response was not ok')
        }
        const data = await response.json();
        setCourses(data.masterClasses);
        //console.log(data.masterClasses);
       
      } catch (error) {
        console.error('Error fetching data field: ', error)
      }
    }

    fetchCourses()
    checkUserExist();
    

  

  }, [checkUserExist]); 



  return (
    <div className='w-full min-h-screen pt-36 flex flex-col gap-2 justify-center items-center '>
        <Head/>
        
        {/* <main className='relative z-30 w-full min-w-[80%] lg:mt-3 flex flex-col justify-center items-center'>
        <div className='title w-full h-[500px] px-5 lg:px-20 font-impact uppercase text-[4rem] lg:text-[8vw] flex flex-col justify-center items-center 
          min-[440px]:text-[5rem] min-[600px]:text-[6rem]'>
           */}
          {/* Main Text Section */}
          {/* <div className='relative flex flex-col xl:gap-[40px] min-[440px]:leading-[5rem] leading-[4rem] lg:leading-[6rem] xl:flex-row
            min-[600px]:leading-[6rem] min-[1120px]:leading-[7rem] min-[1440px]:leading-[9rem] text-center'>
             */}
            {/* The Welcome Text */}
            {/* <div className='bg-gradient-to-r from-[#ffffff05] from-5% via-[rgb(255,255,255)] via-50% to-[#ffffff02] text-transparent bg-clip-text'>
              Welcome <p>to the six</p>
            </div> */}

            {/* Absolute Free Banner */}
            {/* <div className='absolute top-[30px] right-[-50px] min-[1280px]:top-[-80px] min-[1280px]:right-[-60px] 
              min-[600px]:text-[4rem] rotate-12 font-bold font-LiuJian lowercase text-[3.5rem] lg:text-[6rem] text-[var(--redColor)]'>
              <span className=''>free</span>
              <span className='absolute top-5 right-0 blur-[50px] mix-blend-color'>free</span>
              <span className='absolute top-6 right-0 blur-[40px] mix-blend-color'>free</span>
            </div>
          </div> */}

          {/* Weeks Masterclass Text
          <div className='w-full flex flex-col justify-center items-center min-[440px]:leading-[5rem] leading-[4rem]
            min-[600px]:leading-[6rem] lg:leading-[6rem] min-[1120px]:leading-[10vw] bg-gradient-to-r from-[#ffffff05] 
            from-5% via-[rgb(255,255,255)] via-50% to-[#ffffff02] text-transparent bg-clip-text text-center'>
            weeks master <div>class</div> 
          </div>
        </div>
      </main> */}

         <SixMaster  courses={courses} complete={complete}/>
    </div>

    
  )
}

export default Courses;
