
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload as UploadIcon } from "lucide-react";

const Upload = () => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Add Firebase storage upload logic here
    console.log("File upload:", e.target.files);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Upload Documents
          </h2>
          <p className="text-sm text-muted-foreground">
            Upload and process your documents
          </p>
        </div>
        <div className="border-2 border-dashed rounded-lg p-12 text-center">
          <Input
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            id="file-upload"
            accept=".pdf,.png,.jpg,.jpeg"
          />
          <label htmlFor="file-upload">
            <div className="space-y-4 cursor-pointer">
              <UploadIcon className="mx-auto h-12 w-12 text-dms-400" />
              <div>
                <Button type="button">Select Files</Button>
              </div>
              <p className="text-sm text-dms-500">
                Drag and drop files here, or click to select files
              </p>
              <p className="text-xs text-dms-400">
                Supported formats: PDF, PNG, JPG, JPEG
              </p>
            </div>
          </label>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Upload;
