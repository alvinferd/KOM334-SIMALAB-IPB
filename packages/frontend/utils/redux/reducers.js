import { combineReducers } from "@reduxjs/toolkit";

import loading from "@/utils/redux/slice/loading";
import inventaris from "@/utils/redux/slice/inventaris";
import kategori from "@/utils/redux/slice/kategori";
import lab from "@/utils/redux/slice/lab";

const rootReducer = combineReducers({
  loading,
  inventaris,
  kategori,
  lab,
});

export default rootReducer;