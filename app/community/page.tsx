import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  {
    title: "Web3 Workshop Series",
    date: "April 15, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Netaji Auditorium, VIT Chennai",
    description: "Learn the fundamentals of Web3 development with hands-on exercises.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&q=80",
  },
  {
    title: "DeFi Deep Dive",
    date: "March 22, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual Event",
    description: "Explore the latest trends and innovations in decentralized finance.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
  },
  {
    title: "web3 Hackathon",
    date: "july 20-22, 2025",
    time: "48 Hours",
    location: "Main Campus",
    description: "Build innovative blockchain solutions with fellow developers.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  },
];

const memberSpotlights = [
  {
    name: "Aditya Singh",
    year: "Second Year",
    achievement: "Built a  insurence claim  web3 website  that won the Aptos Bounty",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
  },
  {
    name: "Sheikh rumman fardeen",
    year: "Forth Year",
    achievement: "Published research on DAO governance mechanisms",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
  },
];

export default function Community() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Events Section */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Upcoming Events</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.title} className="overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button variant="outline" className="w-full">
                    Register Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Member Spotlights Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Member Spotlights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {memberSpotlights.map((member) => (
              <Card key={member.name} className="flex overflow-hidden">
                <div
                  className="w-1/3 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.year}</p>
                  <p className="text-muted-foreground mb-4">{member.achievement}</p>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}