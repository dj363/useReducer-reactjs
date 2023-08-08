import React,{ useReducer} from "react";

let initialValue = 2;


 function reducer(state, action){
    
    // if else statement
    // if(action.type === 'INCREAMENT'){
    //     return state += 1;
    // } 
    // else if(action.type === 'DECREAMENT'){
    //     return state -= 1;
    // }


    // switch case 
    switch (action.type) {
        case 'INCREAMENT':{
            return state += 1;
        }
        case 'DECREAMENT':{
            return state -=1;
        }
        default: return 'wrong action';
    }
    // throw Error('unknown action: ' + action.type);
};

function UseReducer() {
    const [state, dispatch] = useReducer(reducer,initialValue)
  return (
    <>
    <div>UseReducer</div>
    <p>{state}</p>
    <div>
    <button onClick={() => dispatch({type: 'INCREAMENT'})} style={{margin:'2px'}}> INC </button>
    <button onClick={() => dispatch({type: 'DECREAMENT'})} style={{margin:'2px'}}> DEC </button>
    </div>
    </>
  )
}

export default UseReducer