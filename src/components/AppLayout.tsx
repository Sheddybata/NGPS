import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import HeroSection from './HeroSection';
import PortalCards from './PortalCards';
import JobListings from './JobListings';
import DataDashboard from './DataDashboard';
import SuccessStories from './SuccessStories';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PortalCards />
        <JobListings />
        <DataDashboard />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
