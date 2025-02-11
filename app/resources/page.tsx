import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Link as LinkIcon, ArrowUpRight } from "lucide-react";

const tutorials = [
  {
    title: "Getting Started with Web3",
    level: "Beginner",
    duration: "2 hours",
    description: "Learn the basics of Web3, blockchain, and cryptocurrency fundamentals.",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?auto=format&fit=crop&q=80",
  },
  {
    title: "Smart Contract Development",
    level: "Intermediate",
    duration: "4 hours",
    description: "Build and deploy your first smart contract using Solidity.",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80",
  },
  {
    title: "DeFi Protocol Design",
    level: "Advanced",
    duration: "6 hours",
    description: "Deep dive into creating decentralized finance protocols.",
    image: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&q=80",
  },
];

const articles = [
  {
    title: "Understanding DAO Governance",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "10 min read",
    description: "A comprehensive guide to decentralized autonomous organizations.",
  },
  {
    title: "The Future of DeFi",
    author: "Raj Patel",
    date: "March 10, 2024",
    readTime: "8 min read",
    description: "Exploring upcoming trends in decentralized finance.",
  },
  {
    title: "Zero Knowledge Proofs Explained",
    author: "Maya Singh",
    date: "March 5, 2024",
    readTime: "12 min read",
    description: "A beginner-friendly introduction to ZK-proofs.",
  },
];

const usefulLinks = [
  {
    title: "Ethereum Documentation",
    url: "https://ethereum.org/docs/",
    description: "Official documentation for Ethereum development.",
  },
  {
    title: "Web3.js Documentation",
    url: "https://web3js.readthedocs.io/",
    description: "Learn how to interact with Ethereum using Web3.js.",
  },
  {
    title: "OpenZeppelin Guides",
    url: "https://docs.openzeppelin.com/",
    description: "Security-focused smart contract development guides.",
  },
  {
    title: "CryptoZombies",
    url: "https://cryptozombies.io/",
    description: "Learn Solidity through building your own crypto-collectibles game.",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Learning Resources</h1>
          </div>

          <Tabs defaultValue="tutorials" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="links">Useful Links</TabsTrigger>
            </TabsList>

            <TabsContent value="tutorials" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {tutorials.map((tutorial) => (
                  <Card key={tutorial.title} className="overflow-hidden">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${tutorial.image})` }}
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                      <div className="flex gap-4 mb-3">
                        <span className="text-sm text-primary">{tutorial.level}</span>
                        <span className="text-sm text-muted-foreground">{tutorial.duration}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{tutorial.description}</p>
                      <Button>Start Learning</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="articles" className="space-y-6">
              {articles.map((article) => (
                <Card key={article.title} className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <p className="text-muted-foreground">{article.description}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <FileText className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="links" className="space-y-6">
              {usefulLinks.map((link) => (
                <Card key={link.title} className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        {link.title}
                        <LinkIcon className="h-4 w-4 text-muted-foreground" />
                      </h3>
                      <p className="text-muted-foreground">{link.description}</p>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}