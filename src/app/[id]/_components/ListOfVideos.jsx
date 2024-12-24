import Link from "next/link";
import React from "react";
import { FaLock } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";


function ListOfVideo ({ user, chapters, handleGetChapter, handleClick, statusChaps, active}){
   

    const generateList = () => {

        if(!chapters || !Array.isArray(chapters)){
            console.log('No chapters available: ',user,'/',chapters)
            return <li>No chapters available</li>
            
        }
        console.log('from ListOFViseo: ',user,'/',chapters)
        return (
            chapters.map((chap, index) => (
              <li  key={index}
                className={`w-full text-left
                    ${active !== 0 ? 'opacity-0 text-gray-50' : 'hover:bg-gray-200 '} 
                 `} 
              >
                {
                  user ?
                  (
                  <button 
                    onClick={(e) =>{ 
                      
                      handleGetChapter(chap.videoUrl,index)
                        
                      
                      console.log(e.key)
                    } }
                    data-value={chap.videoUrl}
                    className={` w-full p-2 
                      bg-gray-300/20 text-white
                      hover:bg-gray-300 transition-all duration-300 ease-in-out
                      ${statusChaps[index] ? 'bg-orangeColor text-white' : 'bg-gray-300/20 text-black '} 
                    `}
                    
                  >
                    <div className="text-left text-[1rem]" >
                      {chap.title}
                    </div>
                    {/* <div className='chap-description w-full  hidden md:block line-clamp-3'>
                      {chap.description}
                    </div> */}
                    
                  </button> 
                  )
                  :(<Link
                        href={`/sign-in?redirectTo=${encodeURIComponent(window.location.pathname)}`}
                        className=" "
                        onClick={handleClick} 
                      >
                      <div className='w-full p-3 gap-1 text-left text-[.8rem] bg-gray-300/20 text-white
                          flex flex-row justify-between items-center
                        hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out
                          '
                      > 
                      {chap.title}  
                      <FaLock size={20}/>
                      </div>
                    </Link>
                  )
                 
                }
                
              </li>
            ))
        
       )
    }

    return(
            <div className="relative w-[300px] h-[700px] p-2 bg-gray-800/50 overflow-hidden  hidden md:inline"  >
                <div className="w-full pl-3 py-5 text-[2rem]  ">
                  <div className="  text-[2.3rem] font-inter font-extrabold " >
                    Chapters
                  </div>
                  {
                    user? null
                    :(
                      <div className=' w-[80%] flex justify-start  gap-x-1 pb-2 text-[.8rem] text-red-500' >
                        <IoIosWarning size={20}/>
                        Please Enroll Now to get access to all this chapters
                      </div>
                    )
                    
                  }
                </div>
                
                {/* <ul>list()</ul> bg-gray-400/50*/}
                <div className="h-[500px] p-2 pb-50 overflow-hidden overflow-y-auto custom-scrollbar "  >
                <ul className="grid  gap-3  rounded-none md:grid-cols-1 ">
                    {generateList()}
                </ul>
                </div>
            </div>

    );
}

export default ListOfVideo;