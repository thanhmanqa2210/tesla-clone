const scrollEr = (state = 0, action) => {
  switch (action.type) {
    case "SCROLL-CONTAINER": {
      return action.payload;
    }
    default:
      return state;
  }
};
export default scrollEr;
