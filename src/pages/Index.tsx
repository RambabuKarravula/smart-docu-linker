
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DocumentCard } from "@/components/document/DocumentCard";

const Index = () => {
  const recentDocuments = [
    {
      type: "invoice" as const,
      status: "processing" as const,
      title: "Supplier Invoice",
      number: "INV-2024-001",
      date: "2024-03-20",
      linkedDocs: 2,
    },
    {
      type: "po" as const,
      status: "approved" as const,
      title: "Purchase Order",
      number: "PO-2024-001",
      date: "2024-03-19",
      linkedDocs: 3,
    },
    {
      type: "grn" as const,
      status: "pending" as const,
      title: "Goods Receipt Note",
      number: "GRN-2024-001",
      date: "2024-03-18",
      linkedDocs: 1,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Recent Documents
          </h2>
          <p className="text-sm text-muted-foreground">
            View and manage your documents
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentDocuments.map((doc) => (
            <DocumentCard key={doc.number} {...doc} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
