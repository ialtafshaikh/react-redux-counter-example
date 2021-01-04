import "./App.css";
import Counter from "./Components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <Counter />
        </header>
      </Provider>
    </div>
  );
}

export default App;
