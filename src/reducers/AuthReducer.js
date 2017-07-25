const INIT_STATE = {
  text: ""
};

export default ListData = (state = INIT_STATE, action) => {
  console.log(action);
  if(action.type == "text_input") {
    return {...state, text: action.payload};
  } else {
    return state;
  }
}
