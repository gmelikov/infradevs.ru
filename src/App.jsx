import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import MeetupPage from './pages/MeetupPage';
import CFPPage from './pages/CFPPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meetup/:id" element={<MeetupPage />} />
          <Route path="/cfp" element={<CFPPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
