import  { useState,useEffect } from 'react'
import axios from 'axios';
function useFetchUser(url) {
    // console.log("To fetch",user)
  const [data,setData]=useState(null);
  useEffect(()=>{
    const fetchChats=async ()=>{
       try{
           const data=await axios.get(url);
          //  console.log("Chats are ",data.data);
           setData(data.data);
       }catch(error)
       {
             console.log("Error in fetching chats",error.message);
       }
    }

    fetchChats();
},[url])

// console.log("Data is ",data)
return data;
}

export default useFetchUser