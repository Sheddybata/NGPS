import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Building2, 
  BarChart3, 
  ArrowLeft, 
  Menu, 
  X,
  ChevronRight,
  User,
  Settings,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface NavigationProps {
  showBackButton?: boolean;
  backPath?: string;
  title?: string;
  subtitle?: string;
}

const Navigation: React.FC<NavigationProps> = ({ 
  showBackButton = false, 
  backPath = '/', 
  title,
  subtitle 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ name: 'Home', path: '/' }];
    
    if (pathSegments.length > 0) {
      const portalMap: { [key: string]: string } = {
        'job-seeker': 'Job Seeker Portal',
        'employer': 'Employer Portal',
        'data-analytics': 'Data & Analytics'
      };
      
      const sectionMap: { [key: string]: string } = {
        'advanced-search': 'Advanced Job Search',
        'cv-builder': 'CV Builder',
        'career-guidance': 'Career Guidance',
        'skills-training': 'Skills Training',
        'job-posting': 'Job Posting',
        'talent-search': 'Talent Search',
        'market-analytics': 'Market Analytics',
        'hiring-tools': 'Hiring Tools',
        'dashboards': 'Interactive Dashboards',
        'trends': 'Trend Analysis',
        'reports': 'Report Generation',
        'skills-gap': 'Skills Gap Data'
      };

      if (pathSegments[0] in portalMap) {
        breadcrumbs.push({
          name: portalMap[pathSegments[0]],
          path: `/${pathSegments[0]}`
        });
      }

      if (pathSegments[1] && pathSegments[1] in sectionMap) {
        breadcrumbs.push({
          name: sectionMap[pathSegments[1]],
          path: `/${pathSegments[0]}/${pathSegments[1]}`
        });
      }
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();
  const currentPortal = location.pathname.split('/')[1];

  const portalNavItems = [
    {
      name: 'Job Seeker Portal',
      path: '/job-seeker',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      active: currentPortal === 'job-seeker'
    },
    {
      name: 'Employer Portal',
      path: '/employer',
      icon: Building2,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      active: currentPortal === 'employer'
    },
    {
      name: 'Data & Analytics',
      path: '/data-analytics',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      active: currentPortal === 'data-analytics'
    }
  ];

  const quickActions = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Settings', path: '/settings', icon: Settings }
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo and Back Button */}
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(backPath)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>
            )}
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img 
                  src="/nigeria.svg" 
                  alt="Nigeria Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">NGPS</div>
                <div className="text-xs text-gray-600 leading-tight">Nigerian Global Positioning System</div>
              </div>
            </div>
          </div>

          {/* Center - Breadcrumbs */}
          <div className="hidden md:flex items-center space-x-2">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.path} className="flex items-center">
                {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
                <button
                  onClick={() => navigate(crumb.path)}
                  className={`text-sm font-medium transition-colors ${
                    index === breadcrumbs.length - 1
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {crumb.name}
                </button>
              </div>
            ))}
          </div>

          {/* Right Side - Portal Navigation and User Menu */}
          <div className="flex items-center space-x-4">
            {/* Portal Navigation - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              {portalNavItems.map((item) => (
                <Button
                  key={item.path}
                  variant={item.active ? "default" : "ghost"}
                  size="sm"
                  onClick={() => navigate(item.path)}
                  className={`flex items-center space-x-2 ${
                    item.active 
                      ? `${item.bgColor} ${item.color} border-0` 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.name}</span>
                </Button>
              ))}
            </div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img 
                      src="/ILO LOGO.png" 
                      alt="User" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">Admin</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {quickActions.map((action) => (
                  <DropdownMenuItem key={action.path} onClick={() => navigate(action.path)}>
                    <action.icon className="w-4 h-4 mr-2" />
                    {action.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            {/* Breadcrumbs for Mobile */}
            <div className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.path} className="flex items-center">
                  {index > 0 && <ChevronRight className="w-3 h-3 text-gray-400 mx-1" />}
                  <button
                    onClick={() => {
                      navigate(crumb.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`font-medium transition-colors ${
                      index === breadcrumbs.length - 1
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {crumb.name}
                  </button>
                </div>
              ))}
            </div>

            {/* Portal Navigation for Mobile */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Switch Portal
              </div>
              {portalNavItems.map((item) => (
                <Button
                  key={item.path}
                  variant={item.active ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full justify-start ${
                    item.active 
                      ? `${item.bgColor} ${item.color} border-0` 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.name}
                  {item.active && <Badge variant="secondary" className="ml-auto">Current</Badge>}
                </Button>
              ))}
            </div>

            {/* Quick Actions for Mobile */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Quick Actions
              </div>
              {quickActions.map((action) => (
                <Button
                  key={action.path}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    navigate(action.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full justify-start text-gray-600 hover:text-gray-900"
                >
                  <action.icon className="w-4 h-4 mr-3" />
                  {action.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Page Title Section */}
      {(title || subtitle) && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                {title && <h1 className="text-2xl font-bold text-gray-900">{title}</h1>}
                {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
