const showLanguages = (state = false, action) => {
  switch (action.type) {
    case "SHOW_LANGS": {
      return action.payload;
    }
    case "UN_SHOW_LANGS": {
      return action.payload;
    }
    default:
      return state;
  }
};
export default showLanguages;
