import { configureStore} from "@reduxjs/toolkit";
import paper from "../modules/paper";

const store = configureStore({
    reducer: {
       paper,
      },
  });
  
  export default store;