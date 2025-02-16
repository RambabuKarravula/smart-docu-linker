
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import {
  BarChart as BarChartIcon,
  FileText,
  AlertCircle,
  Clock,
} from "lucide-react";

const Reports = () => {
  const stats = [
    {
      title: "Total Documents",
      value: "1,234",
      icon: FileText,
      description: "Documents processed",
    },
    {
      title: "Pending Approvals",
      value: "12",
      icon: Clock,
      description: "Awaiting review",
    },
    {
      title: "Issues",
      value: "3",
      icon: AlertCircle,
      description: "Require attention",
    },
    {
      title: "Processing Rate",
      value: "98%",
      icon: BarChartIcon,
      description: "Success rate",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Reports</h2>
          <p className="text-sm text-muted-foreground">
            View system performance and document statistics
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center space-x-2">
                <stat.icon className="h-5 w-5 text-dms-500" />
                <h3 className="font-medium text-dms-700">{stat.title}</h3>
              </div>
              <p className="mt-4 text-3xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-sm text-dms-500">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
