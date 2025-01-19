import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, CreditCard, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Unlimited access to all features",
  "Priority customer support",
  "Advanced analytics dashboard",
  "Custom integrations",
  "Team collaboration tools",
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Transform Your Business with Our SaaS
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Powerful tools to help you scale your business and reach new heights.
          Start your journey today.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/signup">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to succeed
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                Work together seamlessly with your team members in real-time.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <DollarSign className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Cost Effective</CardTitle>
              </CardHeader>
              <CardContent>
                Affordable pricing plans that scale with your business needs.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CreditCard className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Simple Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                Transparent pricing with no hidden fees or surprise charges.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Pro Plan</CardTitle>
                <p className="text-4xl font-bold">$49/month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8" size="lg">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;