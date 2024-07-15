import './App.css';
import { useEffect, useState } from 'react';
import AllUSers from './Components/AllUSers';
import SpecifilChat from './Components/SpecifilChat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useFetchUser from './CustomHooks/useFetchUser';

function App() {
  const [chatUser, setChatUser] = useState(null);
  const [showHide, setShowHide] = useState(true);
  const [toggle,setToggle]=useState(false);
  const chat = useFetchUser(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatUser?.id}`);

  useEffect(()=>{
           if(toggle)
            document.documentElement.classList.add('dark');
          else
            document.documentElement.classList.remove('dark');
  },[toggle])
 

  return (
    <>
     
      <Router>
        <div className='flex dark:bg-darkALLUsers'>
          <div className={`allUsersDiv  w-[35%] ${showHide ? "show" : "hide"}`}>
            <AllUSers  toggle={toggle} setToggle={setToggle} chatUser={chatUser} setChatUser={setChatUser} showHide={showHide} setShowHide={setShowHide} />
          </div>
          <div className={`border-yellow-600 flex-[6] messageDiv ${showHide ? "hideMSG" : "showMSG"}`}>
            <SpecifilChat chat={chat} chatUser={chatUser} showHide={showHide} setShowHide={setShowHide} />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
