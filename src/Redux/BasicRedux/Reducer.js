const initialState = {
  username: "john"
}


export const reduxReducer = (state= initialState,action)=>{

  switch(action.type){
    case "NAMECHANGE":
      return state.username
      default:
      return state
  }

}