const formPasswordRegis = (
  state = { password: "", typePassword: true, toggleEye: false, isEye: 0 },
  action
) => {
  switch (action.type) {
    case "FORM-PASSWORD-REGIS": {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};

const formRePasswordRegis = (
  state = { password: "", typePassword: true, toggleEye: false, isEye: 0 },
  action
) => {
  switch (action.type) {
    case "FORM-RE-PASSWORD-REGIS": {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
export default { formRePasswordRegis, formPasswordRegis };
