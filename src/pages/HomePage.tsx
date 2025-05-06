import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import FeatureCards from '../components/home/FeatureCards';
import QuizTeaser from '../components/home/QuizTeaser';
import BlogPreview from '../components/home/BlogPreview';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Preserva Brasil - Poluição e Conservação Ambiental';
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <FeatureCards />
      <QuizTeaser />
      <BlogPreview />
      <CallToAction />
    </>
  );
};

export default HomePage;