import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ClassCardProps {
  title: string;
  instructor: string;
  time: string;
  date: string;
  location: string;
  image: string;
}

export function ClassCard({ title, instructor, time, date, location, image }: ClassCardProps) {
  const { toast } = useToast();

  const handleBooking = () => {
    toast({
      title: "Class Booked!",
      description: `You've successfully booked ${title} with ${instructor}`,
    });
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-gray-500">with {instructor}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleBooking} className="w-full bg-primary hover:bg-primary/90">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}