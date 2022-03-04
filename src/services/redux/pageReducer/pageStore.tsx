import { createStore } from "redux";
import pageReducer from "./pageReducer";

const pageStore = createStore(pageReducer);

export default pageStore;
