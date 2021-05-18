import React, { Fragment } from "react";
import SortingVisualizer from "./components/SortingVisualizer";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className = 'App'>Sorting Visualizer</div>
          <Route exact path="/" component={SortingVisualizer} />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
