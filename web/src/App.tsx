import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import HomePage from "@desktop/HomePage";
import { HOME_PAGE } from "./Routes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
