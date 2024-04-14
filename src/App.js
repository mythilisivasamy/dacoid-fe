import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Android2 from './views/Android2';
import Android4 from './views/Android4';
import Android5 from './views/Android5';
import Android6 from './views/Android6';
import Android8 from './views/Android8';
import Android9 from './views/Android9';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="android2" element={<Android2 />} />
          <Route path="android4" element={<Android4 />} />
          <Route path="android5" element={<Android5 />} />
          <Route path="android6" element={<Android6 />} />
          <Route path="android8" element={<Android8 />} />
          <Route path="android9" element={<Android9 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
