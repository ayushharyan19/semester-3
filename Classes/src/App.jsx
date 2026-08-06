import React from 'react'
// import UseEffectDemo from './class-2/UseEffectDemo'
// import NavBar from './class-3/NavBar'
import { Route, Routes } from 'react-router-dom'
// import Home from './class-3/Home'
// import About from './class-3/About'
// import UseReducerDemo from './class-5/useReduserDemo'
// import StateExample from './class_01/StateExample'
// import ColorChanger from './class-1/ColorChanger';
import Student from './class-1/child';
// https://github.com/Rupesh155

const App = () => {
  return (
    <div>
      {/* <StateExample/> */}
       {/* <UseEffectDemo/> */}
       {/* <NavBar/>
       <Routes>
        <Route  path='/'   element={<Home/>}/>
        <Route  path='/about'   element={<About/>}/>

       </Routes> */}
       <Student name = "Ayush" age = "20" />
       <Student name = "Kanishk" age = "21" />
       <Student name = "Pratham" age = "22" />

       {/* <UseReducerDemo /> */}
       {/* <ColorChanger /> */}
       {Student}
    </div>
  );
};

export default App;


// localhost:5173/