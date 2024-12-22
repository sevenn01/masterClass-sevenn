// lib/chatService.js
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

// Function to send a new message
export const sendMessage = async (email,idOfWeek,mssg,sender,timesTamp,idOfUser,setMssg) => {
  try {
    // Reference to the week's collection (e.g Week_01,02...)
    const collectionRef = collection(db, `Week_0${idOfWeek}`);

    // Add a new message to the appropriate collection
    await addDoc (collectionRef, {
      createdAt: serverTimestamp(),  // Save timestamp in ISO format
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
  } catch (error) {
    console.error("Error sending message: ", error);
  }
};

// Function to get chat messages in real-time
export const getMessages = (idOfWeek, setMssgs) => {
  if(db){

    const collectionRef = collection(db, `Week_0${idOfWeek}`);
    const q = query(collectionRef, orderBy('createdAt', 'asc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
};
