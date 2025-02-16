
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
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
import { CalendarClock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Licenses = () => {
  const { toast } = useToast();

  const licenses = [
    {
      id: 1,
      name: "Document Processing Software",
      expiryDate: "2024-12-31",
      status: "active",
      department: "IT",
      owner: "John Smith",
      daysRemaining: 285,
    },
    {
      id: 2,
      name: "OCR Module",
      expiryDate: "2024-06-30",
      status: "warning",
      department: "Operations",
      owner: "Jane Doe",
      daysRemaining: 45,
    },
    {
      id: 3,
      name: "API Gateway License",
      expiryDate: "2024-04-15",
      status: "critical",
      department: "IT",
      owner: "Mike Johnson",
      daysRemaining: 15,
    },
  ];

  const handleRenewal = (licenseId: number) => {
    toast({
      title: "Renewal Request Sent",
      description: "The license renewal request has been submitted.",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            License Management
          </h2>
          <p className="text-sm text-muted-foreground">
            Track and manage software licenses
          </p>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>License Name</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {licenses.map((license) => (
                <TableRow key={license.id}>
                  <TableCell className="font-medium">{license.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4 text-dms-400" />
                      {license.expiryDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        license.status === "active"
                          ? "default"
                          : license.status === "warning"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {license.daysRemaining} days remaining
                    </Badge>
                  </TableCell>
                  <TableCell>{license.department}</TableCell>
                  <TableCell>{license.owner}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRenewal(license.id)}
                    >
                      Request Renewal
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Licenses;
