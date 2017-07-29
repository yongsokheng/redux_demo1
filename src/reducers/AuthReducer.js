const INIT_STATE = {
  text: "",
  data: [],
  loading: true
};

export default ListData = (state = INIT_STATE, action) => {
  console.log(action);
  if(action.type == "text_input") {
    return {...state, text: action.payload};
  } else if(action.type == "fetch_data") {
    return {...state, data: action.payload, loading: false}
  } else {
    return state;
  }
}
