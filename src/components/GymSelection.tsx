import { MapPin, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function GymSelection() {
  const navigate = useNavigate();
  // This would typically come from a backend/local storage
  const lastVisitedGym = {
    name: "FitZone Gym",
    location: "123 Main Street, Downtown"
  };

  const handleSelectGym = () => {
    navigate('/schedule');
  };

  return (
    <div className="space-y-6 p-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Select Gym</h2>
        <p className="text-gray-500">Choose your preferred location</p>
      </div>

      <Card className="bg-white">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Current Location</h3>
              <Select defaultValue="downtown">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downtown">Downtown Gym</SelectItem>
                  <SelectItem value="uptown">Uptown Fitness</SelectItem>
                  <SelectItem value="westside">Westside Gym</SelectItem>
                  <SelectItem value="eastside">Eastside Fitness Center</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-start gap-3">
            <History className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Last Visited</h3>
              <p className="text-sm text-gray-500">{lastVisitedGym.name}</p>
              <p className="text-xs text-gray-400">{lastVisitedGym.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button 
        className="w-full bg-primary hover:bg-primary/90 active:bg-primary/80"
        onClick={handleSelectGym}
      >
        Select Gym
      </Button>
    </div>
  );
}