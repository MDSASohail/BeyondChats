import img from '../Images/Photo.jpeg'
import axios from 'axios';
import {Link, useLocation, useParams} from 'react-router-dom'

import  { useEffect, useState } from 'react'
import SideBar from './SideBar';
import useFetchUser from '../CustomHooks/useFetchUser';

function AllUSers({toggle,setToggle,chatUser,setChatUser,setShowHide,showHide}) {
    const [chatURL,setChatURL]=useState(1);
    
    const allUsers=useFetchUser(`https://devapi.beyondchats.com/api/get_all_chats?page=${chatURL}`);
    const [filterUsers,setFilterUser]=useState([]);
    const path=useLocation()
    // console.log("Path",params.pathname)
    const[sideBar,setSidebar]=useState(false);
    console.log(toggle,"to")
//    console.log("All users are ",allUsers?.data.data,filterUsers)
    const filter=(e)=>{
        if(e.target.value==="")
        {
            setFilterUser(allUsers.data.data);
            return;
        }
        const f=allUsers.data.data.filter(item=>item.creator.name?.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilterUser(f);
        
    }
    useEffect(()=>{
            setFilterUser(allUsers?.data.data)
    },[chatURL,allUsers])
    
    const datas=[
        {text:"All",url:"/all",page:1},
        {text:"Regular",url:"/regular",page:2},
        {text:"Test",url:"/unread",page:3},
        {text:"Test1",url:"/text1",page:4},
        {text:"Test2",url:"/test2",page:7},
        {text:"All2",url:"/all2",page:5},
        {text:"Regular2",url:"/regular2",page:6}
    ]
    
    return (
        <div className={`h-screen   dark:bg-darkSelect dark:text-white  `}>
             <div className={`absolute  tran z-50 ${sideBar?"showSideBar":"hideSideBar"}`} >
                <SideBar toggle={toggle} setToggle={setToggle} sideBar={sideBar} setSidebar={setSidebar}/>
            </div>
            <div className='h-full   '>
                <div className='flex h-[12%] p-3 items-center'>
                    <svg onClick={()=>{setSidebar(true)}} className="w-6 h-6 cursor-pointer text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                    </svg>
                    <div className='w-[90%]'>
                        <input onChange={filter} type="text" placeholder='Search' className='rounded-3xl ml-4 px-3 py-2 w-full dark:bg-darkInputBG dark:text-white text-sm bg-gray-100 outline-none' />
                    </div>

                </div>
                <div className='w-screen h[5%] flex  scroll-none  overflow-x-scroll s  '>
                    {datas.map((item,index)=><button key={index} onClick={()=>{setChatURL(item.page)}} className={`px-3 py-2 ${chatURL===item.page ?"border-blue-800 border-b-2":""}`}>{item.text}</button>)}
                </div>
                <div className='h-[80%] overflow-y-auto'>
                       {
                          filterUsers?.map((eachUser,index)=>{
                               const arr=eachUser?.creator.name?.split(' ');
                              

                               
                            return (
                                <Link key={index} to={`${eachUser.id}`}>
                            <li onClick={()=>{setChatUser(eachUser);setShowHide(!showHide)}} className={` cursor-pointer px-2 py-2  flex justify-start items-center   list-none ${chatUser?.id===eachUser.id?"bg-blue-400 dark:bg-darkSelect2  text-white":"hover:bg-slate-100  dark:hover:bg-blue-100 dark:hover:text-black  "}`}  >
                             {/* <img src={img} alt="SA" className='w-[50px] h-[50px] rounded-full'/> */}
                             <div className='w-[50px] text-xl h-[50px] rounded-full text-white gradiantt flex justify-center items-center'>{arr?.length>=1 && <p><strong className='p-1'>{arr[0]?.charAt(0)}</strong><strong  className='p-1'>{arr[1]?.charAt(0)}</strong></p>}</div>
                             <div className='ml-3 flex flex-col -full'>
                                <span className=' font-mediumk '>{eachUser.creator.name?eachUser.creator.name:"Unknown"}</span>
                                <span className={`font-light text-darkSmText ${eachUser.id===chatUser?.id?"dark:text-white":""}`}>Open to see the chats.</span>
                             </div>

                          </li>
                          </Link>
                            )
                          })
                       }
                </div>
            </div>
        </div>
    )
}

export default AllUSers