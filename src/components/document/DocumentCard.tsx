
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Link as LinkIcon, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocumentCardProps {
  type: "invoice" | "po" | "grn" | "debit" | "credit" | "payment";
  status: "processing" | "approved" | "rejected" | "pending";
  title: string;
  number: string;
  date: string;
  linkedDocs?: number;
  className?: string;
}

export function DocumentCard({
  type,
  status,
  title,
  number,
  date,
  linkedDocs = 0,
  className,
}: DocumentCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all hover:shadow-lg",
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-dms-500" />
            <span className="font-medium text-dms-700">{title}</span>
          </div>
          <Badge
            variant={
              status === "approved"
                ? "default"
                : status === "rejected"
                ? "destructive"
                : "secondary"
            }
            className="capitalize"
          >
            {status}
          </Badge>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-sm text-dms-600">Document No: {number}</p>
          <p className="text-sm text-dms-600">Date: {date}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <LinkIcon className="h-4 w-4 text-dms-400" />
            <span className="text-sm text-dms-500">{linkedDocs} linked</span>
          </div>
          {status === "pending" && (
            <div className="flex items-center space-x-1 text-amber-500">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">Action needed</span>
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-dms-200 to-dms-300" />
    </Card>
  );
}
