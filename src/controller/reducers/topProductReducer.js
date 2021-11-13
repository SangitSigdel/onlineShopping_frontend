const topProductReducer = (state = [], action) => {
    if(action.type==="FETCH__PROMOTIONAL__DATA"){
        return action.payload
    }
    else {
        return state
    }
  };
  export default topProductReducer;