import { combineReducers } from "redux";
import SettingReducer from "./SettingReducer";

const rootReducer = combineReducers({
  settingReducer: SettingReducer,
});

export default rootReducer;