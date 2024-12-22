'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Head from './_components/Head'
import Course from './_components/course'
import VideoList from './_components/VideoList'
import { useParams, useSearchParams } from 'next/navigation'

import { getWeekById } from '@/lib/getWeek'
import { checkUserByEmail, fetchUserByEmail, fetchUserCount } from '@/lib/user'
import { createUser } from '@/lib/createUser'
import { useUser } from '@clerk/nextjs'
import Comment from '@/components/comment/Comment'



function Week() {

  const [week, setWeek] = useState([]);
  const [img, setImg] =useState();
  const [chapters, setChapters] =useState([]);
  const [statusChaps, setStatusChaps] =useState([]);
  
  //const [ind, setInd] =useState();
  const [generateWeekId, setGenerateWeekId] =useState();
  const [generateUserId, setGenerateUserId] =useState();
  const [url, setUrl] =useState([]);
  

  const params = useParams();
  const searchParams = useSearchParams();

  //const slug = params.slug;
  const id = parseInt(searchParams.get('id'));
  


  //const router = useRouter();
  const { user, isLoaded } = useUser();

  const checkAndCreateUser = useCallback(async () => {
    if(user){

      const email = user?.primaryEmailAddress?.emailAddress;
      const userId = user?.id;

      try{
            const isExist = await checkUserByEmail(email);
          if(!isExist){
            
            const nbUsers = await fetchUserCount(); 
            console.log("fetchUserCount : ", nbUsers);

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

          

          

          
          //check completed chapters ---------------

          const getUser = await fetchUserByEmail(email);
          const getWeeks = getUser?.completedWeeks;
          if(getWeeks){

            console.log('user:', getUser)
            setGenerateUserId(getUser.id);
            console.log('All weeks: ',getWeeks)
            const selectWeek = getWeeks.find(week => week.weekId === id);
            //id that generate from Hygraph
            
            const status_chaps = [];
            
            if(selectWeek){
              setGenerateWeekId(selectWeek.id);
              console.log('week id selecte: ',selectWeek)
              
              const selectChapters = selectWeek.chapterComplete;
              console.log('selected Chapters of Week is: ',selectChapters);
            /* selectChapters.forEach(chap => {
                status_chaps.push(chap.complete)
              })
              */
              //setStatusChaps(selectChapters)
              setStatusChaps(selectWeek)
              console.log(status_chaps);
            }
          }
        
  
      }catch(error){
        console.error("Error in fetching user count:", error);
      }
      }
      
    
  }, [user,id]);

 


  useEffect(() => {

    
    checkAndCreateUser();

    const getWeek = async (id) => {

      if(id){
        const resp = await getWeekById(id);
        if(resp && resp.weeks01 && resp.weeks01.length > 0){
          const fetchedWeek = resp.weeks01[0];
          console.log(fetchedWeek);
          //setChat(fetchedWeek.chats)
          setWeek(fetchedWeek);
          setChapters(fetchedWeek.chapters);
          if(fetchedWeek.chapters && fetchedWeek.length > 0){
            setUrl(fetchedWeek.chapters[0].video.url)
          }
        }
        else{
          console.log('Failed to fetch week data');
        }
      }
      
    }
    

    if(id){
      getWeek(id);
     /* console.log('Course id: ', typeof id)
      console.log('From week: ', week)
      console.log('video url: ',chapter)*/
      //console.log('week: ', week.chapters.url)
    } 
    else console.log('Course id: not fetched')
    
    
  },[id,checkAndCreateUser]);

  /*
  const handleGetChapter = (videoUrl, index) => {
    setChapter(videoUrl);
    setInd(index);
  }
*/


  const tools = week.tools ? week.tools.text.split('\\n'): null; 
  console.log('tools: ',tools)
  console.log('link: ',week.link)
  console.log('chapters: ',chapters)
  console.log('goal: ',week.goal? week.goal.text.replace( '\\n', ' ' ): null)
  //tools.forEach((tool,i) => console.log('tools'+i+' : ', tool))

  return (
    <div className='w-full min-h-screen flex flex-col items-center overflow-x-hidden'>
        <Head/>
        
        { user? ( <div>{user?.primaryEmailAddress?.emailAddress}</div>): null }
      
        <Course week={week}/> 

                      

        <div className=' flex justify-center items-center'>
          <div className=' text-sm mt-100'>{url}</div>  
        <VideoList weekChapters={chapters} status={statusChaps} generateUserId={generateUserId}/> 

        </div>
        <Comment   userId={generateUserId}/>
    </div>
  )
}

export default Week

