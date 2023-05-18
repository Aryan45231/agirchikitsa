import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootNavigator from "../navigation";
import { rootReducer } from "../store/reducers";
import CombinedContextProvider from "../context";
function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <>
      <Provider store={store}>
        <CombinedContextProvider>
          <RootNavigator />
        </CombinedContextProvider>
      </Provider>
    </>
  );
}

export default App;
