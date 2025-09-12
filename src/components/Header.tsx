import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bell, User, Users, Building2, BarChart3, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Job Seeker Portal', href: '/job-seeker', icon: Users },
    { name: 'Employer Portal', href: '/employer', icon: Building2 },
    { name: 'Data & Analytics', href: '/data-analytics', icon: BarChart3 }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <img 
                    src="/nigeria.svg" 
                    alt="Nigeria Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-xl font-bold text-gray-900">NGPS</div>
                  <div className="text-xs text-gray-600 leading-tight">Nigerian Global Positioning System</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={isActive(item.href) ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  navigate(item.href);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-2 ${
                  isActive(item.href) 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden xl:inline">{item.name}</span>
              </Button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/job-seeker/advanced-search')}
              className="text-gray-400 hover:text-gray-600"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-400 hover:text-gray-600"
            >
              <Bell className="w-5 h-5" />
            </Button>
            
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
                  <span className="text-sm font-medium">User</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => navigate('/job-seeker')}>
                  <Users className="w-4 h-4 mr-2" />
                  Job Seeker Portal
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/employer')}>
                  <Building2 className="w-4 h-4 mr-2" />
                  Employer Portal
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/data-analytics')}>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Data & Analytics
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={isActive(item.href) ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  navigate(item.href);
                  setIsMenuOpen(false);
                }}
                className={`w-full justify-start h-12 ${
                  isActive(item.href) 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <item.icon className="w-4 h-4 mr-3" />
                {item.name}
              </Button>
            ))}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  navigate('/job-seeker/advanced-search');
                  setIsMenuOpen(false);
                }}
                className="w-full justify-start h-10"
              >
                <Search className="w-4 h-4 mr-3" />
                Search Jobs
              </Button>
              
              {/* User Profile */}
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="/ILO LOGO.png" 
                    alt="User" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">User</div>
                  <div className="text-xs text-gray-500">admin@nlmis.gov.ng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;