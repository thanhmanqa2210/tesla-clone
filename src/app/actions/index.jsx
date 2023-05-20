export const actionScrollEr = (height) => {
  return {
    type: "SCROLL-CONTAINER",
    payload: height,
  };
};
export const isNowLogin = (isLogin) => {
  return {
    type: "IS-NOW-LOGIN",
    payload: isLogin,
  };
};
export const formPasswordRegis = (value) => {
  return {
    type: "FORM-PASSWORD-REGIS",
    payload: value,
  };
};
export const formRePasswordRegis = (value) => {
  return {
    type: "FORM-RE-PASSWORD-REGIS",
    payload: value,
  };
};
export const showLangs=()=>{
  return {
    type:"SHOW_LANGS",
    payload:true,
  }
}
export const unShowLangs = () => {
  return {
    type: "UN_SHOW_LANGS",
    payload: false,
  };
};
