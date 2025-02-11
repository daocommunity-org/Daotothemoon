import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Calendar } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0" />
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10 px-4 py-32 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
            Welcome to The DAO Community
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join VIT Chennai's premier blockchain and crypto community. Learn, build, and innovate together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/about">
                Join Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg shadow-lg">
              <Users className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Connect with like-minded individuals passionate about blockchain and crypto.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-lg">
              <BookOpen className="h-12 w-12 mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Learning</h3>
              <p className="text-muted-foreground">
                Access curated resources and hands-on workshops to master blockchain technology.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-muted-foreground">
                Participate in hackathons, meetups, and networking events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join The Revolution?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of VIT Chennai's growing blockchain community and shape the future of Web3.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}