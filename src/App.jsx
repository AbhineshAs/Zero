import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import WhatWeDo from './pages/WhatWeDo';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import JourneyDetail from './pages/JourneyDetail';
import BookNow from './pages/BookNow';
import Consultation from './pages/Consultation';
import ProjectDetail from './pages/ProjectDetail';
import Membership from './pages/Membership';
import ImpactReport from './pages/ImpactReport';
import ExploreResorts from './pages/ExploreResorts';
import FloatingActions from './components/FloatingActions';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import './App.css';

function App() {
  return (
    <ReactLenis root>
      <Router>
        <div className="App">
          <FloatingActions />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/journeys" element={<Experiences />} />
            <Route path="/experience" element={<Navigate to="/journeys" replace />} />
            <Route path="/journey/:id" element={<JourneyDetail />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/impact-report" element={<ImpactReport />} />
          <Route path="/explore" element={<ExploreResorts />} />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
