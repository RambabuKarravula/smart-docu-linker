
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-dms-50 to-dms-100">
      <div className="text-center space-y-6 max-w-2xl px-4">
        <h1 className="text-4xl font-bold tracking-tight text-dms-900 sm:text-6xl">
          BBL Daido DMS
        </h1>
        <p className="text-lg text-dms-600">
          Welcome to BBL Daido Document Management System. Streamline your document workflow with our intelligent document processing solution.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/login">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
