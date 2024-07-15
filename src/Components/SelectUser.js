import BackgroundIMG from '../Images/TelegramBackground2.png';

function SelectUser() {
  return (
    <div className='h-screen relative flex justify-center items-center dark:bg-darkALLUsers'>
              <img src={BackgroundIMG} alt="" className='h-screen -z-10 absolute ' />
              <p className='text-white selectUser px-2 py-0 rounded-lg flex '>Select a chat to start message</p>
        </div>
  )
}

export default SelectUser