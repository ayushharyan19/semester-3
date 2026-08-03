// import React, { useReducer } from 'react'

// const UseReducerDemo = () => {
//     function reduser(state,action){
//         if(action.type==="inc"){
//             return state+1;
//         }else if(action.type==="dec"){
//             return state-1;
//         }else if(action.type==="reset"){
//             return 0;
//         }else{
//             return state;
//         }
//     }
//     let[state,dispatch]=useReducer(reduser,0)
//   return (
//     <div>
//         <h2>{state}</h2>
//         <button onClick={()=>dispatch({type:"inc"})}>add</button>
//         <button onClick={()=>dispatch({type:"dec"})}>sub</button>
//         <button onClick={()=>dispatch({type:"reset"})}>reset</button>
//     </div>
//   )
// }

// export default UseReducerDemo

import React, { useReducer } from 'react'

const UseReducerDemo = () => {



    // let ar=[1,2,3,4]
    // let num=[...ar,5,6]

    // function sum(a,b,...num){

    // }
    // sum(1,2,3,4,5,6,43,6,3,56,7,7)
    // console.log();
    








    let data={
        input:"",
        list:[]
    }
    function reduser(state, action) {
    if (action.type == "inp") {
        return {
            ...state,
            input: action.payload
        };
    } 
    else if (action.type == "add") {
        return {
            ...state,
            list: [...state.list, state.input],
            input: ""
        };
    }
    else if (action.type == "remove") {
        return {
            ...state,
            list: state.list.filter((item, index) => index !== action.payload)
        };
    }

    return state;
}
  let [state,dispatch]=  useReducer(reduser,data)
  return (
    <div>
        <input value = {state.input} onChange={(e)=>dispatch({type:"inp",payload:e.target.value})}/>
        <button  onClick={()=>dispatch({type:"add"})}>add</button>
        {
            state.list.map((a, index)=>{
                return(
                    <li key={index} onClick={() => dispatch({ type: "remove", payload: index})}>
                    {a}
                    </li>
                )
            })
        }
    </div>
  )
}

export default UseReducerDemo

