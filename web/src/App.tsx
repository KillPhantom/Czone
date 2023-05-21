import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import HomePageSwitch from "@pageSwitch/HomePageSwitch";
import DashboardPage from "@desktop/DashboardPage";
import { HOME_PAGE, DASHBOARD_PAGE, DEMO_PAGE } from "./Routes";
import DemoPage from "@desktop/DemoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePageSwitch />} />
        <Route path={DASHBOARD_PAGE} element={<DashboardPage />} />
        <Route path={DEMO_PAGE} element={<DemoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
