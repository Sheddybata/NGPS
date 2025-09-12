
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobSeekerPortal from "./pages/JobSeekerPortal";
import AdvancedJobSearch from "./pages/AdvancedJobSearch";
import CVBuilder from "./pages/CVBuilder";
import CareerGuidance from "./pages/CareerGuidance";
import SkillsTraining from "./pages/SkillsTraining";
import EmployerPortal from "./pages/EmployerPortal";
import JobPosting from "./pages/JobPosting";
import TalentSearch from "./pages/TalentSearch";
import MarketAnalytics from "./pages/MarketAnalytics";
import HiringTools from "./pages/HiringTools";
import DataAnalytics from "./pages/DataAnalytics";
import InteractiveDashboards from "./pages/InteractiveDashboards";
import TrendAnalysis from "./pages/TrendAnalysis";
import ReportGeneration from "./pages/ReportGeneration";
import SkillsGapData from "./pages/SkillsGapData";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/job-seeker" element={<JobSeekerPortal />} />
            <Route path="/job-seeker/advanced-search" element={<AdvancedJobSearch />} />
            <Route path="/job-seeker/cv-builder" element={<CVBuilder />} />
            <Route path="/job-seeker/career-guidance" element={<CareerGuidance />} />
            <Route path="/job-seeker/skills-training" element={<SkillsTraining />} />
            <Route path="/employer" element={<EmployerPortal />} />
            <Route path="/employer/job-posting" element={<JobPosting />} />
            <Route path="/employer/talent-search" element={<TalentSearch />} />
            <Route path="/employer/market-analytics" element={<MarketAnalytics />} />
            <Route path="/employer/hiring-tools" element={<HiringTools />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/data-analytics/dashboards" element={<InteractiveDashboards />} />
            <Route path="/data-analytics/trends" element={<TrendAnalysis />} />
            <Route path="/data-analytics/reports" element={<ReportGeneration />} />
            <Route path="/data-analytics/skills-gap" element={<SkillsGapData />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
