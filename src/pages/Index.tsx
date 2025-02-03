import { Button } from "@/components/ui/button";
import { ClassGrid } from "@/components/ClassGrid";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow fixed top-0 left-0 right-0 z-10">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">FreeFit</h1>
            <Button variant="outline" size="sm">Sign In</Button>
          </div>
        </div>
      </header>

      <main className="container py-4 mt-16">
        <div className="mb-6 space-y-3">
          <h2 className="text-xl font-bold">Available Classes</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search classes..."
                className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90">
              Filter
            </Button>
          </div>
        </div>

        <ClassGrid />
      </main>
    </div>
  );
};

export default Index;