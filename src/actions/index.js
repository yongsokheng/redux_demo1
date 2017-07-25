export const textInputHandleAction = (text) => {
  console.log("a");

  return {
    type: "text_input",
    payload: text
  }
}
