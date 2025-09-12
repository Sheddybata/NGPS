import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Plus, 
  Calendar,
  ArrowLeft,
  Eye,
  Edit,
  Trash2,
  Mail,
  Clock,
  Users,
  BarChart3,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Report {
  id: number;
  name: string;
  type: 'Standard' | 'Custom';
  status: 'Draft' | 'Published' | 'Scheduled';
  createdDate: string;
  lastModified: string;
  downloads: number;
  description: string;
  template: string;
}

const ReportGeneration: React.FC = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const [showReportBuilder, setShowReportBuilder] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [reportName, setReportName] = useState('');
  const [reportDescription, setReportDescription] = useState('');

  const standardTemplates = [
    {
      id: 'quarterly-overview',
      name: 'Quarterly Labour Market Overview',
      description: 'Comprehensive quarterly report for the National Employment Council (NEC)',
      category: 'Official',
      sections: ['National Metrics', 'State Performance', 'Sector Analysis', 'Policy Recommendations'],
      estimatedTime: '2-3 hours',
      frequency: 'Quarterly'
    },
    {
      id: 'youth-employment',
      name: 'Annual Report on Youth Employment and NEET Rate',
      description: 'Detailed analysis of youth employment trends and NEET (Not in Education, Employment, or Training) rates',
      category: 'Policy',
      sections: ['Youth Demographics', 'Employment Trends', 'Education Pipeline', 'Intervention Impact'],
      estimatedTime: '4-5 hours',
      frequency: 'Annual'
    },
    {
      id: 'female-participation',
      name: 'State of Female Labour Force Participation',
      description: 'Analysis of women\'s participation in the labour market across different sectors and regions',
      category: 'Gender',
      sections: ['Participation Rates', 'Sectoral Distribution', 'Wage Gaps', 'Barriers Analysis'],
      estimatedTime: '3-4 hours',
      frequency: 'Annual'
    },
    {
      id: 'skills-gap-analysis',
      name: 'National Skills Gap Analysis',
      description: 'Comprehensive analysis of skills mismatch between supply and demand',
      category: 'Skills',
      sections: ['Supply Analysis', 'Demand Analysis', 'Gap Identification', 'Recommendations'],
      estimatedTime: '5-6 hours',
      frequency: 'Bi-annual'
    },
    {
      id: 'sector-performance',
      name: 'Sectoral Performance Report',
      description: 'Performance analysis across different economic sectors',
      category: 'Economic',
      sections: ['Sector Growth', 'Employment Trends', 'Investment Analysis', 'Future Outlook'],
      estimatedTime: '3-4 hours',
      frequency: 'Quarterly'
    },
    {
      id: 'regional-disparities',
      name: 'Regional Disparities in Employment',
      description: 'Analysis of employment disparities across different regions and states',
      category: 'Regional',
      sections: ['Regional Comparison', 'Disparity Analysis', 'Root Causes', 'Policy Interventions'],
      estimatedTime: '4-5 hours',
      frequency: 'Annual'
    }
  ];

  const customReports: Report[] = [
    {
      id: 1,
      name: 'Q4 2023 Labour Market Summary',
      type: 'Custom',
      status: 'Published',
      createdDate: '2024-01-15',
      lastModified: '2024-01-15',
      downloads: 45,
      description: 'Custom quarterly analysis for internal stakeholders',
      template: 'quarterly-overview'
    },
    {
      id: 2,
      name: 'Lagos State Employment Analysis',
      type: 'Custom',
      status: 'Draft',
      createdDate: '2024-01-20',
      lastModified: '2024-01-22',
      downloads: 0,
      description: 'Detailed analysis of employment trends in Lagos State',
      template: 'regional-disparities'
    },
    {
      id: 3,
      name: 'Technology Sector Growth Report',
      type: 'Custom',
      status: 'Scheduled',
      createdDate: '2024-01-25',
      lastModified: '2024-01-25',
      downloads: 0,
      description: 'Monthly technology sector performance report',
      template: 'sector-performance'
    }
  ];

  const scheduledReports = [
    {
      id: 1,
      name: 'Monthly Employment Dashboard',
      frequency: 'Monthly',
      nextRun: '2024-02-01',
      recipients: ['nec@nigeria.gov.ng', 'ministry@labour.gov.ng'],
      status: 'Active'
    },
    {
      id: 2,
      name: 'Quarterly Policy Brief',
      frequency: 'Quarterly',
      nextRun: '2024-04-01',
      recipients: ['policy@nec.gov.ng', 'research@labour.gov.ng'],
      status: 'Active'
    },
    {
      id: 3,
      name: 'Annual Skills Report',
      frequency: 'Annual',
      nextRun: '2024-12-31',
      recipients: ['skills@nec.gov.ng', 'education@fme.gov.ng'],
      status: 'Paused'
    }
  ];

  const exportFormats = [
    { format: 'PDF', description: 'Professional document format', icon: FileText },
    { format: 'Excel', description: 'Spreadsheet for data analysis', icon: BarChart3 },
    { format: 'PowerPoint', description: 'Presentation format', icon: Users },
    { format: 'CSV', description: 'Raw data export', icon: Download }
  ];

  const handleCreateReport = () => {
    setShowReportBuilder(true);
  };

  const handleGenerateReport = () => {
    // Report generation logic here
    console.log('Generating report:', { selectedTemplate, reportName, reportDescription });
    setShowReportBuilder(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Analytics
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Report Generation</h1>
                <p className="text-gray-600 mt-1">Create and export formal reports for stakeholders</p>
              </div>
            </div>
            <Button onClick={handleCreateReport}>
              <Plus className="w-4 h-4 mr-2" />
              Create New Report
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="templates">Standard Templates</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
            <TabsTrigger value="builder">Report Builder</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standardTemplates.map((template) => (
                <Card key={template.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <CardDescription className="mt-1">{template.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{template.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-gray-900 mb-2">Sections Included:</h4>
                        <div className="flex flex-wrap gap-1">
                          {template.sections.map((section, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {section}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Est. Time:</span>
                          <span className="font-medium ml-1">{template.estimatedTime}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Frequency:</span>
                          <span className="font-medium ml-1">{template.frequency}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => {
                            setSelectedTemplate(template.id);
                            setReportName(template.name);
                            setReportDescription(template.description);
                            setActiveTab('builder');
                          }}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => {
                            setSelectedTemplate(template.id);
                            setReportName(template.name);
                            setReportDescription(template.description);
                            handleCreateReport();
                          }}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Use Template
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <div className="space-y-4">
              {customReports.map((report) => (
                <Card key={report.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 mr-3">{report.name}</h3>
                          <Badge 
                            variant={report.status === 'Published' ? 'default' : 
                                    report.status === 'Draft' ? 'secondary' : 'outline'}
                          >
                            {report.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{report.description}</p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Created {report.createdDate}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            Modified {report.lastModified}
                          </span>
                          <span className="flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            {report.downloads} downloads
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-6">
            <div className="space-y-4">
              {scheduledReports.map((report) => (
                <Card key={report.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 mr-3">{report.name}</h3>
                          <Badge 
                            variant={report.status === 'Active' ? 'default' : 'secondary'}
                          >
                            {report.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Frequency:</span>
                            <span className="font-medium ml-1">{report.frequency}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Next Run:</span>
                            <span className="font-medium ml-1">{report.nextRun}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Recipients:</span>
                            <span className="font-medium ml-1">{report.recipients.length}</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h4 className="text-sm font-medium text-gray-900 mb-1">Recipients:</h4>
                          <div className="flex flex-wrap gap-1">
                            {report.recipients.map((email, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {email}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Settings className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="builder" className="space-y-6">
            {showReportBuilder ? (
              <Card>
                <CardHeader>
                  <CardTitle>Custom Report Builder</CardTitle>
                  <CardDescription>
                    Create a custom report by selecting data points, charts, and sections
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="reportName">Report Name</Label>
                      <Input
                        id="reportName"
                        value={reportName}
                        onChange={(e) => setReportName(e.target.value)}
                        placeholder="Enter report name"
                      />
                    </div>
                    <div>
                      <Label>Template</Label>
                      <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select template" />
                        </SelectTrigger>
                        <SelectContent>
                          {standardTemplates.map((template) => (
                            <SelectItem key={template.id} value={template.id}>
                              {template.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={reportDescription}
                      onChange={(e) => setReportDescription(e.target.value)}
                      placeholder="Enter report description"
                      rows={3}
                    />
                  </div>

                  {/* Data Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Data Points</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Metrics</h4>
                        <div className="space-y-2">
                          {['Unemployment Rate', 'Participation Rate', 'Job Creation', 'Wage Growth'].map((metric) => (
                            <div key={metric} className="flex items-center space-x-2">
                              <Checkbox id={metric} />
                              <Label htmlFor={metric} className="text-sm">{metric}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Visualizations</h4>
                        <div className="space-y-2">
                          {['Charts', 'Maps', 'Tables', 'Trends'].map((viz) => (
                            <div key={viz} className="flex items-center space-x-2">
                              <Checkbox id={viz} />
                              <Label htmlFor={viz} className="text-sm">{viz}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Export Options */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {exportFormats.map((format) => (
                        <div key={format.format} className="border rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                          <format.icon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <h4 className="font-medium text-gray-900">{format.format}</h4>
                          <p className="text-sm text-gray-600">{format.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end space-x-4 pt-6 border-t">
                    <Button variant="outline" onClick={() => setShowReportBuilder(false)}>
                      Cancel
                    </Button>
                    <Button variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button onClick={handleGenerateReport}>
                      <Download className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Report Builder Active</h3>
                  <p className="text-gray-600 mb-4">
                    Start by selecting a template or creating a new custom report
                  </p>
                  <Button onClick={handleCreateReport}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Report
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ReportGeneration;


