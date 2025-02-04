import * as React from "react";
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
  const [selectedLocation, setSelectedLocation] = React.useState<string>("");

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

      <div className="flex items-start gap-3">
        <MapPin className="h-5 w-5 text-primary mt-1" />
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Current Location</h3>
          <Select onValueChange={setSelectedLocation} value={selectedLocation}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manhattan">Manhattan Fitness Center</SelectItem>
              <SelectItem value="brooklyn">Brooklyn Strength & Conditioning</SelectItem>
              <SelectItem value="queens">Queens Elite Gym</SelectItem>
              <SelectItem value="bronx">Bronx Power House</SelectItem>
              <SelectItem value="staten">Staten Island Fitness Hub</SelectItem>
              <SelectItem value="upper-east">Upper East Side Wellness</SelectItem>
              <SelectItem value="soho">SoHo Training Studio</SelectItem>
              <SelectItem value="tribeca">TriBeCa Athletic Club</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

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
        disabled={!selectedLocation}
      >
        Select Gym
      </Button>
    </div>
  );
}