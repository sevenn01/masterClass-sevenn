'use client'

import React, { useEffect, useRef, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { IoIosArrowDown  } from 'react-icons/io';
import { MdDone } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UpdateChapter } from '@/lib/user';

function VideoList( {weekChapters, status, generateUserId} ) {

  const [chapters, setChapters] = useState([]);
  const [statusChaps, setStatusChaps] = useState([]);
  const [ ind, setInd] = useState(0);
  const [ url, setUrl] = useState('');
  const [ idOfWeek, setIdOfWeek] = useState();
  const [ idOfChap, setIdOfChap] = useState();
  
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [complete, setComplete] = useState(0);
  const [active, setActive ] = useState(0) ;
  const { user, isLoaded } = useUser();
  const router = useRouter();


  const chapterRef = useRef(null);
  


  const updateChapter = async ( userId,weekId,chapId,statu ) => {
    const isUpdate = await UpdateChapter(userId,weekId,chapId,statu);
    if(isUpdate){
      console.log('Updated successfully--');
    }
    else{
      console.log('Updated failed !!');
      
    }
  }


  useEffect(() => {
    setIsMounted(true);
    if( Array.isArray(weekChapters) && weekChapters.length > 0) {
        setChapters(weekChapters)
        //setUrl(weekChapters[0].video.url)
        setUrl(weekChapters[0].videoUrl)
        console.log('from Video Lists: ', weekChapters)
        console.log('from VideoList [Statu]',status)
        
        //-----------------
        if(user && status){
          const { id, chapterComplete } = status;
          setIdOfWeek(id);
          //console.log('from VideoList [weekID]',status.id)
          console.log('from VideoList [weekID]',id)
          //const updateStatus = [];
          if ( Array.isArray(chapterComplete) && chapterComplete.length > 0 ) {
            setIdOfChap(chapterComplete);
            console.log('[chapter]: ',chapterComplete );
            //console.log('id Of [chapter]: ', status.chapterComplete[0].id);
  
            //const updateStatus = status.chapterComplete.map(chap => chap.complete);
            setStatusChaps(chapterComplete.map(chap => chap.complete));
            //console.log('Status from VideoLists: ',statusChaps)
          
        }
      
    }
    
        //const selectChapters = status?.chapterComplete;
        
        /*selectChapters?.forEach(statu => {
          updateStatus.push(statu.complete);
        })*/

        
        setInd(0)
    }


  }, [weekChapters,status,user]);

  const handleClick = () => {
    if(typeof window !== 'undefined'){
      console.log(window)
      console.log('enroll !!');
      console.log(encodeURIComponent(window.location.pathname)); // This should now log the current path
    } 
    else{
      console.log('Router not loaded yet.');
    }
  };

  const handleMouseLeave = () => setIsOpen(false);
  const handleMouseEnter = () => setIsOpen(true);

  const handleComplete = () =>{
    if(ind>=0  && user){
      const updatedStatus = [...statusChaps];
      updatedStatus[ind] = updatedStatus[ind] ? false : true;
      setStatusChaps(updatedStatus);
      setComplete(ind)
      
      //update status of chapters from DB HyGraph
      updateChapter(generateUserId,idOfWeek,idOfChap[ind].id,updatedStatus[ind]);
      
      //setStatusChaps(s)
      console.log(ind)
    };
  } 
  

  const handlePrev = () => {
    if (ind > 0 && user) {
      const newIndex = ind - 1;
      setInd(newIndex);
      setUrl(chapters[newIndex].videoUrl);
      //setUrl(chapters[newIndex].video.url);
    }
  }

  const handleNext = () => {
    if (ind < chapters.length - 1  && user) {
      const newIndex = ind + 1;
      setInd(newIndex);
      setUrl(chapters[newIndex].videoUrl);
      //setUrl(chapters[newIndex].video.url);
    }
  }

  const handleGetChapter = (videoUrl, index) => {
    setUrl(videoUrl);
    setInd(index);
  }





  if (!isMounted) {
    return null;
  }

  if(!Array.isArray(chapters) || chapters.length === 0){
    return(
      <div className='w-[90%] py-20 flex flex-col gap-5 justify-center'>
        <Skeleton className='h-[80px] w-full' />
        <Skeleton className='h-[40px] w-[200px]' />
        <Skeleton className='h-[150px] w-full' />
        <Skeleton className="video h-[600px] w-full "></Skeleton>

        <div className='w-full flex flex-between items-conter'>
          <div className='w-full flex flex-between gap-2 items-conter'>
            <Skeleton className='w-[60px] h-[30px] ' ></Skeleton>
            <Skeleton className='w-[60px] h-[30px] ' ></Skeleton>
          </div>
            <Skeleton className='w-[120px] h-[30px] ' ></Skeleton>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-[90%] relative flex flex-col justify-center  items-center ">
      
    
    {
      !user ?
      (
        <div>
          <div className=' relative w-[90vw] h-[60px] flex justify-between items-center bg-gray-500 text-[2rem] px-10  font-inter font-extrabold overflow-hidden'>
            <div className='w-full flex justify-start  items-center gap-10 '>
              Chapters
              <IoIosArrowDown/>
            </div>
            <div className='w-full absolute left-0 flex items-center p-3 gap-5 text-[1.5rem] bg-orange-500/80  backdrop-blur-sm ' >
              <Link 
                href={`/sign-in?redirectTo=${encodeURIComponent(window.location.pathname)}`}
                className='w-full flex justify-center  items-center p-3 gap-5 text-[1.5rem]  text-white'
                onClick={handleClick} 
              >
                <div > 
                  Enroll Now 
                </div>
                <FaLock />
              </Link>
            </div>
          </div>
          <div className=' flex items-center gap-x-1 py-2 text-sm text-red-400' >
            <IoIosWarning />
            Please Enroll Now to get access to all this chapters
          </div>
        </div>
      ):
      (
        <NavigationMenu
        ref={chapterRef}
        className="  py-5 rounded-none "
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        
        >
          <NavigationMenuList  >
            <NavigationMenuItem className=" bg-gray-500 rounded-none">
              <NavigationMenuTrigger
                className={`group w-[90vw]  bg-accent text-accent-foreground text-[2rem] px-10 py-10 font-inter font-extrabold uppercase flex justify-between rounded-none
                    hover:text-white
                  `}
                data-state={isOpen ? 'open' : 'closed'}
              >
                Chapters
                <IoIosArrowDown
                  className={`transition-all ease-in-out duration-300 
                    ${
                      isOpen ? 'rotate-180' : ''
                    }
                  `}
                />
              </NavigationMenuTrigger >
              <NavigationMenuContent className=' relative rounded-none p-2  ' >
                <ul className="grid w-[88vw] gap-3 rounded-none md:grid-cols-1 ">
                  
                    { 
                      chapters.map((chap, index) => (
                        <li  key={index}
                          className = {`${active !== 0 ? 'opacity-0 text-gray-50' : 'hover:bg-gray-200 '} `} 
                        >
                          <button 
                            onClick={(e) =>{ 
                              handleGetChapter(chap.videoUrl,index)
                              //handleGetChapter(chap.video.url,index)
                              console.log(e.key)
                            } }
                            data-value={chap.videoUrl}
                            className={` w-full flex justify-between p-5 
                              ${statusChaps[index] ? 'bg-[var(--orangeColor)]  text-white' : 'bg-gray-300/20 text-black '} 
                              hover:bg-gray-300 transition-all duration-300 ease-in-out
                              `}
                            /*disabled = {active !== index}*/
                          >
                            <div >
                              {chap.title}
                            </div>
                            <div className='chap-description w-[300px] truncate hidden md:block '>
                              {chap.description}
                            </div>
                            <div className="duringTime">15:20</div>
                          </button>
                        </li>
                      ))
                    }
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )
    }  
      
      
      <div className='w-full mt-10 flex flex-col gap-3 text-white font-bold text-[1.3rem]  '>
        <div className={` w-fit px-2 flex gap-3 items-center ${statusChaps[ind] ? 'bg-[var(--orangeColor)]' : 'bg-gray-600'}  `}>
          {chapters[ind] ? chapters[ind].title : null }
          <MdDone/>
        </div>
        <div className="description w-[80vw] text-lg font-thin">
          {chapters[ind]  ? chapters[ind].description : null}
        </div>
      </div>

      {/* play video component */}
      <VideoPlayer url={url} />
      
      <div className="control w-full  mt-5 flex flex-col gap-3 min-[454px]:gap-0 min-[454px]:flex-row  min-[454px]:justify-between items-center">
        <div className="next-prev w-full min-[454px]:w-auto  flex justify-between min-[454px]:justify-start gap-10">
          <div 
            className={`prev cursor-pointer
              w-[80px] flex justify-end relative 
              before:w-[35px] before:h-[2px]  before:absolute before:left-0 before:top-[12px] 
              ${user ? 'before:bg-white text-white ' : 'before:bg-white/10 text-white/10'}
              `}
            onClick={() => handlePrev()}
            
          >
            Prev
          </div>
          <div 
            className={`Next cursor-pointer
              w-[80px] flex justify-start relative 
              before:w-[35px] before:h-[2px]  before:absolute before:right-0 before:top-[12px] 
              ${user ? 'before:bg-white text-white ' : 'before:bg-white/10 text-white/10'}
            `}
            onClick={() => handleNext()}
            
          >
            Next

          </div>
        </div>
        <button 
          className={`w-full min-[454px]:w-auto complete px-5 py-2  bg-[var(--orangeColor)]
            transition-all ease-in-out duration-300
            active:bg-gray-200/20
          `}
          onClick={() => handleComplete()}
          
        >Mark As Complete</button>
      </div>
    

    </div>
  );
}

export default VideoList;
