import "./App.css";
import * as Routes from "src/routes";
import * as Router from "react-router-dom";

function App() {
  return (
    <Router.HashRouter>
      <Routes.Main />
    </Router.HashRouter>
  );
}

export default App;
