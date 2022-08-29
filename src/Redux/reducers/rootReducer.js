import { combineReducers } from "redux";
import { authAdminReducer } from "./authAdminReducer";
import { authUserReducer } from "./authUserReducer";
import bannerReducer from "./bannerReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import commentReducer from "./commentReducer";
import orderReducer from "./orderReducer";
import productReducer from "./productReducer";
import sliderReducer from "./sliderReducer";
import userAdminReducer from "./userAdminReducer";
import userUIReducer from "./userUIReducer";

const rootReducer = combineReducers({
    usersAdmin: userAdminReducer,
    usersUI: userUIReducer,
    categories: categoryReducer,
    products: productReducer,
    banners: bannerReducer,
    sliders: sliderReducer,
    orders: orderReducer,
    cartProducts: cartReducer,
    authAdmin: authAdminReducer,
    authUser: authUserReducer,
    comments: commentReducer
})

export default rootReducer;