import "./App.css";
import * as Routes from "src/routes";
import * as Router from "react-router-dom";
import ScrollToTop from "./scroll";

function App() {
  return (
    <Router.HashRouter>
      <ScrollToTop>
        <Routes.Main />
      </ScrollToTop>
    </Router.HashRouter>
  );
}

export default App;
