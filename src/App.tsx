import "./App.css";
import * as Routes from "src/routes";
import * as Router from "react-router-dom";

function App() {
  return (
    <Router.BrowserRouter>
      <Routes.Main />
    </Router.BrowserRouter>
  );
}

export default App;
