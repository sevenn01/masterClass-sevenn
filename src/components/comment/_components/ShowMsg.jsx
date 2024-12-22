'use client'
import React, { useEffect, useState, useRef } from 'react';
import { data } from '../mssgs';
import { IoSend } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useUser } from '@clerk/nextjs';
import { fetchUserByEmail } from '@/lib/user';
import { realTimeChat } from '@/lib/chatControll';

import { sendMessage, getMessages } from '@/lib/chatService';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";


function ShowMsg({idOfWeek}) {
  // function ShowMsg({chats, idOfWeek}) {

  const [mssgs, setMssgs] = useState([]);
  const [mssg, setMssg] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const [idOfUser, setIdOfUser] = useState();
  const scrollRef = useRef(null); // Ref for the scrollable div
  const { user } = useUser();


 



  useEffect(()=>{
    if(user){
      const em = user?.primaryEmailAddress?.emailAddress;
      setEmail(em);
      
       const fetchUserId = async ()=>{
        const result =  await fetchUserByEmail(em)
        setIdOfUser(result?.id);
      }
      fetchUserId()
    }
  },[user])

  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth()+1>=10? date.getMonth()+1 : `0${date.getMonth()+1}`}-${date.getDate()>10? date.getDate() : `0${date.getDate()}`}`;
  const time = `${date.toLocaleTimeString().split(':')[0]}:${date.toLocaleTimeString().split(':')[1]} ${date.toLocaleTimeString().split(' ')[1]}`;
  const createdAt = date.toISOString();
 


  // Scroll to the bottom whenever mssgs changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }


    console.log('messgs thats come from firebase: ',mssgs);
    console.log('fetch Mssgs',mssgs.map(mssg => mssg.mssg))

  }, [mssgs]);

  useEffect(() => {
    //setMssgs(data);

    getMessages(idOfWeek, setMssgs)

/*
    if(db){

      const collectionRef = collection(db, `Week_0${idOfWeek}`);
      
      const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
        if (querySnapshot.empty) {
          console.log('No matching documents.');
          return;
        }
  
        const data = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
  
        console.log('Messages fetched from Firebase: ', data);
        setMssgs(data);
      });
  
      return () => unsubscribe();  // Clean up on unmount
    }
*/


  }, [idOfWeek]);




  const sendMessg = async () => {

    if(!user || !email || !idOfUser){
      console.log('the user is not signed in yet !!');
      return;
    }

    //setLoading(true)
      //const email = user?.primaryEmailAddress?.emailAddress;
    
    const timesTamp = `${today}/${time}`;
    const sender = email.split('@')[0].split('.')[0]; // extract sender's name from email
    
    setLoading(true); // start the loading state when sending the message

    try{
      sendMessage(
        email,
        idOfWeek,
        mssg,sender,
        timesTamp,
        idOfUser,
        setMssg
      );
      /*
      // Reference to the week's collection (e.g Week_01,02...)
      const collectionRef = collection(db, `Week_0${idOfWeek}`);

      // Add a new message to the appropriate collection
      await addDoc (collectionRef, {
        email: email,
        idOfWeek: idOfWeek,
        mssg: mssg,
        sender: sender,
        timestamp: timesTamp,
        userId: idOfUser
      });
      console.log('Message sent successfully!!');

      //After sending, clear the mssg input
      setMssg('');
      */
    }catch(error){
      console.log('Error sending message: ',error);
    }finally{
      setLoading(false);
    }

}
  
  

  const handleKeyPress = (e) => {
    if(e.key === 'Enter' && mssg.trim()){
      e.preventDefault(); // Prevent the default action (form submission, etc.)
      sendMessg(); // Trigger getMessg when Enter is pressed
    }
  }

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // <div>
    //   hi
    // </div>
    <div className='w-full h-full flex flex-col gap-2 font-indie'>
      <div
        ref={scrollRef} // Attach ref to the scrollable div
        className="all-mssg w-full px-5 py-5 h-[90%] rounded-md overflow-y-auto
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-gray-50/55
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-white
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          dark:[&::-webkit-scrollbar-thumb]:bg-white
      ">
        <ul className='flex flex-col gap-5'>


          { mssgs.length > 0 ? (
            mssgs.map((mssg, index) => (


              <motion.li
                  key={index}
                  className={`w-full flex  ${mssg.userId === idOfUser ?  'justify-end': 'justify-start'}`}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                >
                <div className='flex flex-col justify-start'>

                  <div className='max-w-[250px] flex flex-col gap-0 bg-white/20 px-3 py-2 rounded-md'>
                    <div className="sender w-fit  text-[.8rem] font-inter font-semibold ">
                      {mssg.sender}
                    </div>
                      {mssg.mssg}
                  </div>
                  <div className={`time text-[.7rem] font-inter font-light  text-white/55
                        ${mssg.userId === idOfUser ? 'text-left' : 'text-right' }
                    `}>
                    {mssg.timestamp?.split('/')[1]}
                  </div>
                </div>

              </motion.li>
            ))
          ) :
          (
            <li className='text-center'>Let-s discuss</li>
          )
            }
        </ul>
      </div>
      <div className='put-mssg w-full py-2 px-3 relative bg-white flex justify-between items-center gap-1 rounded-md'>
          <input
            type="text"
            value={mssg} // Bind input to state
            placeholder='Write...'
            onChange={(e) => setMssg(e.target.value)}
            onKeyDown={(e) => {
              handleKeyPress(e)
            }}
            className='w-full p-2 px-3 text-[1rem] rounded-md text-black border-none focus:outline-none '
          />
          <button
            //type='submit'
            className='text-[1.5rem] text-black'
            onClick={sendMessg}
            disabled={loading} // Disable button while loading
          >
            <IoSend />
          </button>
      </div>
    </div>
  );
}

export default ShowMsg;

 //const mssgSaved = await realTimeChat(idOfWeek,mssg,result?.id,sender, `${today}/${time}`); 