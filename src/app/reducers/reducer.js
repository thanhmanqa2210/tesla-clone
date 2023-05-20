import { combineReducers } from "redux";
import { default as combined } from "./index";
const allReducers = combineReducers({
  scrollEr: combined.scrollEr,
  isLogin: combined.isLogin,
  formPasswordRegis: combined.formPasswordRegis,
  formRePasswordRegis: combined.formRePasswordRegis,
  showLanguages: combined.showLanguages,
});
export default allReducers;
