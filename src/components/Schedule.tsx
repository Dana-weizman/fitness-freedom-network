import { useState } from "react";
import { format, addDays } from "date-fns";
import { Button } from "@/components/ui/button";
import { ClassGrid } from "./ClassGrid";

export function Schedule() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(new Date(), i);
    return {
      date,
      dayName: format(date, 'EEE'),
      dayNumber: format(date, 'd')
    };
  });

  return (
    <div className="space-y-6 p-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Schedule Class</h2>
        <p className="text-gray-500">Select a day and class</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {next7Days.map((day) => (
          <Button
            key={day.date.toISOString()}
            variant={selectedDay.toDateString() === day.date.toDateString() ? "default" : "outline"}
            className="flex-shrink-0 flex flex-col items-center px-4 py-2"
            onClick={() => setSelectedDay(day.date)}
          >
            <span className="text-sm">{day.dayName}</span>
            <span className="text-lg font-bold">{day.dayNumber}</span>
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Available Classes</h3>
        <ClassGrid />
      </div>
    </div>
  );
}