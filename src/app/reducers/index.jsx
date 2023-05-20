import isLogin from "./isLogin";
import scrollEr from "./scroll";
import showLanguages from "./showLangs";
import { default as formPassword } from "./formPasswordRegis";
const combinedReducers = {
  isLogin,
  scrollEr,
  showLanguages,
  formPasswordRegis: formPassword.formPasswordRegis,
  formRePasswordRegis: formPassword.formRePasswordRegis,
};
export default combinedReducers;
