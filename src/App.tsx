import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PollutionPage from './pages/PollutionPage';
import ConservationPage from './pages/ConservationPage';
import InitiativesPage from './pages/InitiativesPage';
import HowToHelpPage from './pages/HowToHelpPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="poluicao" element={<PollutionPage />} />
        <Route path="conservacao" element={<ConservationPage />} />
        <Route path="iniciativas" element={<InitiativesPage />} />
        <Route path="como-ajudar" element={<HowToHelpPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;