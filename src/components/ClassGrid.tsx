import { ClassCard } from "./ClassCard";

const SAMPLE_CLASSES = [
  {
    title: "Power Yoga Flow",
    instructor: "Sarah Chen",
    time: "7:00 AM",
    date: "Tomorrow",
    location: "Zen Studio Downtown",
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80",
  },
  {
    title: "HIIT Circuit",
    instructor: "Mike Johnson",
    time: "8:30 AM",
    date: "Tomorrow",
    location: "FitZone Gym",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80",
  },
  {
    title: "Spin Class",
    instructor: "Lisa Thompson",
    time: "6:00 PM",
    date: "Today",
    location: "CycleFit Studio",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80",
  },
  {
    title: "Pilates Reformer",
    instructor: "Emma Davis",
    time: "9:00 AM",
    date: "Tomorrow",
    location: "Core Studio",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
  },
];

export function ClassGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {SAMPLE_CLASSES.map((classItem, index) => (
        <ClassCard key={index} {...classItem} />
      ))}
    </div>
  );
}