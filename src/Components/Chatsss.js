import img from '../Images/Photo.jpeg';
import {format} from 'timeago.js'
import fileIcon from '../Images/Files.png';
import recordIcon from '../Images/Record.png';
import smileIcon from '../Images/Smile.png';
import BackgroundIMG from '../Images/TelegramBackground2.png';
import useFetchUser from '../CustomHooks/useFetchUser';
import { useEffect, useRef } from 'react';

function Chatsss({ chat, chatUser, setShowHide, showHide }) {
    const chatRef=useRef();
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatUser]);
    const arr=chatUser?.creator.name?.split(' ');
    return (
        <div className={`h-screen    flex flex-col dark:text-white dark:bg-darkALLUsers  `}>
            <div className=' flex  h-[10%] px-4 py-2'>
                <div className='mr-4 mt-2 cursor-pointer hidden profileChatImg' onClick={() => { setShowHide(!showHide) }}>
                <svg className="w-[30px] h-[30px] text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
</svg>


                </div>
                <div className='flex flex-[4]  '>
                    
                     <div className='w-[50px] text-xl h-[50px] rounded-full text-white gradiantt flex justify-center items-center'>{arr?.length>=1 && <p><strong className='p-1'>{arr[0]?.charAt(0)}</strong><strong  className='p-1'>{arr[1]?.charAt(0)}</strong></p>}</div>
                    <div className='flex flex-col ml-3'>
                        <strong className='font-medium'>{chatUser?.creator.name || "Unknown"}</strong>
                        <span className='font-light text-sm'>{format(chatUser?.updated_at)}</span>
                    </div>
                </div>
                <div className=' items-center flex-[6] justify-end flex border-red-900'>
                    <svg className="w-6 h-6 ml-3 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>

                    <svg className="w-[30px] h-[30px] ml-3 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                    </svg>

                    <svg className="w-[40px] h-[40px] text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M12 6h.01M12 12h.01M12 18h.01" />
                    </svg>
                </div>
            </div>
            <div
                className='h-[81%]   overflow-y-auto  relative border-yellow-900'>
                <img src={BackgroundIMG} className='w-full h-[81%] -z-10 fixed' alt="" />
                {chat?.data.map((item,index)=><li ref={chatRef} className='list-none w-96 ml-2 dark:text-black dark:bg-darkSelect2 bg-white my-4 p-2 rounded-lg' key={index}>
                      <p>{item.message}</p>
                      <div className='text-[14px] mt-2 text-end'>{format(item.created_at)}</div>
                      {/* <span>{item.created_at}</span> */}

                </li>)}


            </div>
            <div className='h-[9%]  px-2  flex items-center dark:bg-darkInputBG'>
                <img src={fileIcon} className='w-7' alt="" />
                <input type="text" placeholder='Write a message...' className='w-full ml-2 outline-none bg-transparent' />
                <img className='w-7 ml-5' src={smileIcon} alt="" />
                <img className='w-7 ml-5' src={recordIcon} alt="" />
            </div>
        </div>
    )
}

export default Chatsss