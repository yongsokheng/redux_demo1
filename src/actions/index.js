export const textInputHandleAction = (text) => {
  console.log("a");

  return {
    type: "text_input",
    payload: text
  }
}

export const fetchDataAction = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({
          type: "fetch_data",
          payload: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
