'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LiaCommentSolid } from "react-icons/lia";
import ShowMsg from './_components/ShowMsg';
import {getChats,realTimeChat} from '@/lib/chatControll'
import { useParams, useSearchParams } from 'next/navigation';

function Comment({userId}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const [constraints, setConstraints] = useState({ top: 0, bottom: 0, left: 0, right: 0 });
    const commentRef = useRef(null);
    const buttonRef = useRef(null);
    const [chats, setChats] =useState([]);
    

    //get id of week from the path
    const searchParams = useSearchParams();
  
    //const slug = params.slug;
    const weekId = parseInt(searchParams.get('id'));

    useEffect(() => {
        if(isNaN(weekId)){
            console.log('Invalid or missing weekId!');
            return;
        }

        const fetchChats  = async (id) => {
            try {
                const resp = await getChats(id);
                if(resp){
                    console.log('from Comment',resp.weeks01[0].chats)
                    setChats(resp.weeks01[0].chats);
                }else{
                    console.log('failed to fetch Chats ...')
                }
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        }

        
        console.log('from Comment weekId: ',weekId)
        fetchChats(weekId)
        
        
        
    },[weekId])
            
    useEffect(() => {
        
        console.log('form Comment chats: ',chats)
        
        const handleClickOutside = (e) => {
            if( isOpen && commentRef.current && !commentRef.current.contains(e.target) && !buttonRef.current.contains(e.target) ){
                setIsOpen(false)
            }
        }
        
        // Add scroll event listener when the component mounts
        //document.addEventListener('scroll',handleScroll)
        // Add mousedown event listener when the component mounts
        document.addEventListener('mousedown',handleClickOutside)

        return () => {

            document.removeEventListener('mousedown', handleClickOutside)
        }

    },[commentRef,isOpen,chats])
    // Animation variants for the comment box
    const boxVariants = {
        closed: {
            scale: 0.5,
            //opacity: 0,
            right: '-500px',
            y: '-50%',
        },
        open: {
            scale: 1,
            //opacity: 1,
            right: '80px',
            y: '-45%',
        }
    };

    return (
        <div className='comment-container z-50  min-h-screen fixed flex justify-end items-end font-LiuJian overflow-hidden'>
            <button 
                ref={buttonRef} 
                onClick={() => setIsOpen(!isOpen)}
                className='comments-btn flex gap-1 px-3 py-3 justify-center items-center bg-white text-black text-[2rem]
                    rounded-[50%] fixed bottom-[35px] right-5 z-30 
                '
            >
                
                <LiaCommentSolid />
            </button>
            {/* Comment box */}
            <motion.div
                 ref={commentRef}
                 className="comment-box  md:w-[600px] h-[800px] bg-black/55  p-6 rounded-lg  shadow-lg fixed top-0 right-52 backdrop-blur-sm"
                 initial="closed"
                 animate={isOpen ? "open" : "closed"}
                 variants={boxVariants}
                 transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                 
                 style={{ top: '50%' }}
                 
            >
                <p className=' text-[1rem] '></p>
                <ShowMsg idOfWeek= {weekId}/>
                {/* {<ShowMsg chats={chats} idOfWeek= {weekId}/>} */}
            </motion.div>
        </div>
    )
}

export default Comment;
