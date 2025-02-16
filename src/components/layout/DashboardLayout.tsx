
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FileText, BarChart2, Search, Settings, Upload, List, Key } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sidebarNavItems = [
  {
    title: "Documents",
    icon: FileText,
    href: "/",
  },
  {
    title: "Upload",
    icon: Upload,
    href: "/upload",
  },
  {
    title: "Search",
    icon: Search,
    href: "/search",
  },
  {
    title: "Reports",
    icon: BarChart2,
    href: "/reports",
  },
  {
    title: "Logs",
    icon: List,
    href: "/logs",
  },
  {
    title: "Licenses",
    icon: Key,
    href: "/licenses",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <div className="hidden border-r bg-dms-50/95 backdrop-blur-sm lg:block lg:w-64">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-semibold">BBL Daido DMS</span>
            </Link>
          </div>
          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {sidebarNavItems.map((item) => (
                <Button
                  key={item.href}
                  variant={location.pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    location.pathname === item.href && "bg-dms-100"
                  )}
                  asChild
                >
                  <Link to={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <main className="h-[calc(100vh-3.5rem)] overflow-auto">
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
