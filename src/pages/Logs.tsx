
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock } from "lucide-react";

const Logs = () => {
  const logs = [
    {
      id: 1,
      type: "Document Approval",
      status: "approved",
      user: "John Doe",
      timestamp: "2024-03-20 14:30",
      details: "Invoice INV-2024-001 approved",
    },
    {
      id: 2,
      type: "License Renewal",
      status: "pending",
      user: "Jane Smith",
      timestamp: "2024-03-19 11:20",
      details: "Software license renewal notification sent",
    },
    {
      id: 3,
      type: "Document Upload",
      status: "completed",
      user: "Mike Johnson",
      timestamp: "2024-03-18 09:45",
      details: "New PO document uploaded",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">System Logs</h2>
          <p className="text-sm text-muted-foreground">
            View all system activities and approvals
          </p>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.type}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(log.status)}
                      <Badge
                        variant={
                          log.status === "approved"
                            ? "default"
                            : log.status === "rejected"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {log.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.timestamp}</TableCell>
                  <TableCell>{log.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Logs;
