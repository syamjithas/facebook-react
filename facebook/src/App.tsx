import React from 'react';
import logo from './logo.svg';
import Login from './pages/login/Login';
import './App.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import WaterMark from './components/water-mark/WaterMark';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <WaterMark/>
    </div>
  );
}

export default App;
