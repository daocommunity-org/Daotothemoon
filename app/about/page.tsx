import { Card } from "@/components/ui/card";
import { Blocks, Target, Users, Lightbulb } from "lucide-react";

const teamMembers = [
  {
    name: "Sreecharan S",
    role: "Community Lead",
    bio: "Blockchain enthusiast with 5+ years of experience in DeFi protocols.",
    image: "@/assets/cheecha.png",
  },
  {
    name: "Puneet Chandna",
    role: "Outreach Lead",
    bio: "Experienced community manager and a passionate Solana developer.",
    image: "@/assets/puneet_paaji.jpeg",
  },
  {
    name: "Jheyanth",
    role: "Vice Community Lead",
    bio: "Full-stack developer with a passion for blockchain and web3.",
    image: "@/assets/jhe.jpeg",
  },
  {
    name: "Aakriti",
    role: "Technical Lead",
    bio: "Blockchain developer with a focus on smart contracts and DeFi.",
    image: "@/assets/kanpur.jpeg",
  },
  {
    name: "Vikranth",
    role: "Content Lead",
    bio: " Experienced in content creation, Video editing and blockchain education.",
    image: "@/assets/vicky_playboi.png",
  },
  {
    name: "Gunjana Sahoo",
    role: "Management Lead",
    bio: "Experienced in Organizing Hackathons and blockchain workshops.",
    image: "@/assets/heil_gunjana.png",
    
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Mission & Vision Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex items-center gap-2 mb-4">
            <Blocks className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">About Us</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-12">
            The DAO Community at VIT Chennai is a student-led initiative fostering blockchain innovation and education.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6">
              <Target className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower students with blockchain knowledge and create a vibrant ecosystem of Web3 innovators.
              </p>
            </Card>

            <Card className="p-6">
              <Lightbulb className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading blockchain community in educational institutions across India.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, collaboration, and decentralization guide everything we do.
              </p>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}