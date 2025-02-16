
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { DocumentCard } from "@/components/document/DocumentCard";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const searchResults = [
    {
      type: "invoice" as const,
      status: "approved" as const,
      title: "Supplier Invoice",
      number: "INV-2024-002",
      date: "2024-03-15",
      linkedDocs: 2,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Search Documents
          </h2>
          <p className="text-sm text-muted-foreground">
            Search through all documents
          </p>
        </div>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-dms-400" />
          <Input
            placeholder="Search by document number, title, or content..."
            className="pl-10"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {searchResults.map((doc) => (
            <DocumentCard key={doc.number} {...doc} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Search;
