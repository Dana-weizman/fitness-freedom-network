import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GymSelection } from "./components/GymSelection";
import { Schedule } from "./components/Schedule";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

function App() {
  return (
    <Router>
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
          <Routes>
            <Route path="/" element={<GymSelection />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
