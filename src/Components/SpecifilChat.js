import React from 'react';

import useFetchUser from '../CustomHooks/useFetchUser';
import {Routes,Route} from 'react-router-dom'
import SelectUser from './SelectUser';
import Chatsss from './Chatsss';
function SpecifilChat({chatUser,chat,showHide,setShowHide}) {

    return (
       <Routes>
         <Route path='/' element={<SelectUser/> }/>
         <Route path='*' element={<Chatsss chat={chat} chatUser={chatUser} showHide={showHide} setShowHide={setShowHide}/>}/>
       </Routes>
    )
}

export default SpecifilChat;
