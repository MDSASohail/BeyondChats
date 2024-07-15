import React from 'react'
import Profile from '../Images/Photo.jpeg'
import Call from '../Images/Call.svg'
import Night from '../Images/Night.png'
function SideBar({toggle,setToggle,sideBar,setSidebar}) {
    // console.log("Toggle",toggle)
    return (
        <div className='flex  w-screen sideBar   '>
            <div className=' w-80  h-screen bg-white dark:bg-darkSideBarText  '>
                <div className='h-[23%] pt-4'>
                    <div className='relative'>
                        <img src={Profile} className='w-12 rounded-full mx-6 ' alt="" />
                        <button  className={`button HideToggle top-0 right-0 absolute ${toggle ? 'active' : ''}`} onClick={()=>{setToggle(!toggle)}}>
                        {!toggle &&<svg  className='w-8 mr-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="moon"><path fill="#h73j29" d="M30.89,57.93a26.44,26.44,0,0,1-17.75-6.87c.57,0,1.14,0,1.71,0a28.23,28.23,0,0,0,22.68-45,26.36,26.36,0,0,1-6.64,51.86Z"></path><path fill="#87h369" d="M23.79 14.32a.75.75 0 0 0 .52-.38l1.75-3.17 1.74 3.17a.75.75 0 0 0 .52.38l3.55.68L29.4 17.64a.72.72 0 0 0-.2.61l.45 3.58L26.38 20.3a.72.72 0 0 0-.64 0l-3.28 1.53.45-3.58a.74.74 0 0 0-.19-.61L20.24 15zM8.26 29.05l.29-2.32a.74.74 0 0 0-.2-.61l-1.59-1.7L9.05 24a.78.78 0 0 0 .52-.38l1.12-2 1.13 2a.74.74 0 0 0 .51.38l2.29.43L13 26.12a.77.77 0 0 0-.2.61l.29 2.32-2.11-1a.77.77 0 0 0-.64 0zM27.7 35.26a.75.75 0 0 0-.19.61l.29 2.31-2.11-1a.74.74 0 0 0-.32-.07.71.71 0 0 0-.32.07l-2.11 1 .29-2.31a.76.76 0 0 0-.2-.61l-1.6-1.7 2.29-.44a.76.76 0 0 0 .52-.37l1.13-2.05 1.12 2.05a.76.76 0 0 0 .52.37l2.29.44z"></path></svg>}
                        { toggle &&<svg className='mr-5'  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="sun"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g stroke="#000" stroke-width="2" transform="translate(-919 -2066)"><g transform="translate(920 2067)"><circle cx="11" cy="11" r="5"></circle><path d="M11 0v2M11 20v2M3.22 3.22l1.42 1.42M17.36 17.36l1.42 1.42M0 11h2M20 11h2M3.22 18.78l1.42-1.42M17.36 4.64l1.42-1.42"></path></g></g></g></svg>}
                        </button>
                    </div>
                    <div className='flex flex-col mx-6 mt-2'>
                        <strong className='text-sm'>Md Sohail Ansari</strong>
                        <span className='text-blue-400'>Set Emoji Status</span>
                    </div>
                </div>
                <div>
                    <div className='flex p-3 items-center'>
                        <svg class="w-[25px] h-[25px] text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="1.6" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className='ml-4 font-medium text-sm'>New Group</span>
                    </div>
                    <div className='flex p-3 items-center '>
                        <svg className="w-[25px] h-[25px] text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <span className='ml-4 font-medium text-sm'>Contacts</span>
                    </div>
                    <div className='flex p-3 items-center '>
                        <img src={Call} alt="" className='w-[25px] h-[25px] rotate-3  ' />
                        <span className='ml-4 font-medium text-sm'>Calls</span>
                    </div>
                    <div className='flex p-3 items-center '>
                        <svg className='' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                            <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"></path>
                        </svg>
                        <span className='ml-4 font-medium text-sm'>Save Message</span>
                    </div>
                    <div className='flex p-3 items-center '>
                    <svg className='w-[25px] ' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-Linejoin="round"></g><g id="SVGRepo_iconCarrier"><path  d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"></path></g></svg>
                        <span className='ml-4 font-medium text-sm'>Settings</span>
                    </div>

                    <div className='flex p-3 hideToggle items-center'>
                        <img src={Night} alt="" className='dark-mode'/>
                        <span className='ml-4 font-medium text-sm'>Night Mode</span>
                        <div onClick={()=>{setToggle(!toggle)}} className={` relative ml-14 h-7 rounded-3xl  w-16 ${toggle?"bg-blue-600 ":"bg-gray-500"}`}>
                             <div className={`h-7 w-7 top-[1px] left-[-1px] tran  absolute rounded-full  ${toggle?"translate-x-9 top-[1px] border-2 bg-blue-950 border-blue-600":"border-2 border-gray-400 bg-white"}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1  ' onClick={()=>{setSidebar(!sideBar)}}>

            </div>

        </div>
    )
}

export default SideBar