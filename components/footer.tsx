import Link from "next/link";
import { Blocks } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Blocks className="h-6 w-6" />
              <span className="font-bold text-lg">The DAO Community</span>
            </div>
            <p className="text-muted-foreground">
              Building the future of Web3 at VIT Chennai
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/community" className="text-muted-foreground hover:text-foreground">Community</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-foreground">Resources</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/resources#tutorials" className="text-muted-foreground hover:text-foreground">Tutorials</Link></li>
              <li><Link href="/resources#articles" className="text-muted-foreground hover:text-foreground">Articles</Link></li>
              <li><Link href="/resources#events" className="text-muted-foreground hover:text-foreground">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://x.com/daocommunity" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
              <li><a href="https://www.instagram.com/daocommunity_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Instagram</a></li>
              <li><a href="https://github.com/daocommunity-org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The DAO Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}