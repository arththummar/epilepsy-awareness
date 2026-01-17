import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Activity, Users, ShieldAlert } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/30 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold text-primary bg-primary/5">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                1 in 26 people will develop epilepsy
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground">
                Understanding Epilepsy, <span className="text-primary">Supporting Lives</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Join us in raising awareness, providing education, and building a supportive community for the 3.4 million Americans living with epilepsy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full text-lg px-8 bg-primary hover:bg-primary/90"
                  onClick={() => setLocation('/first-aid')}
                >
                  Learn Seizure First Aid
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full text-lg px-8 border-primary text-primary hover:bg-primary/5"
                  onClick={() => setLocation('/about')}
                >
                  About Epilepsy
                </Button>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/hero-community.jpg" 
                  alt="Diverse community supporting each other" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-background fill-current">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-primary">3.4M</h3>
              <p className="text-muted-foreground font-medium">Americans living with active epilepsy</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-accent-foreground">1 in 10</h3>
              <p className="text-muted-foreground font-medium">People will have a seizure in their lifetime</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-secondary-foreground">60%</h3>
              <p className="text-muted-foreground font-medium">Of people with epilepsy can become seizure-free with medication</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Information Cards */}
      <section className="container py-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-primary">Empowering Through Knowledge</h2>
          <p className="text-lg text-muted-foreground">
            Understanding epilepsy is the first step towards breaking stigma and providing better support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            className="group cursor-pointer"
            onClick={() => setLocation('/about')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setLocation('/about')}
          >
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
              <img 
                src="/images/icon-brain-health.png" 
                alt="Brain health illustration" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-white p-8"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">What is Epilepsy?</h3>
            <p className="text-muted-foreground mb-4">Learn about the condition, its causes, and how it affects the brain.</p>
            <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>

          <div 
            className="group cursor-pointer"
            onClick={() => setLocation('/seizure-types')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setLocation('/seizure-types')}
          >
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
              <div className="w-full h-full bg-secondary/30 flex items-center justify-center">
                <Activity className="w-24 h-24 text-secondary-foreground/50" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Types of Seizures</h3>
            <p className="text-muted-foreground mb-4">Not all seizures look the same. Discover the different types and their symptoms.</p>
            <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>

          <div 
            className="group cursor-pointer"
            onClick={() => setLocation('/first-aid')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setLocation('/first-aid')}
          >
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
              <img 
                src="/images/first-aid-guide.jpg" 
                alt="First aid illustration" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Seizure First Aid</h3>
            <p className="text-muted-foreground mb-4">Knowing what to do can save a life. Learn the essential steps of seizure first aid.</p>
            <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
            <p className="text-lg opacity-90">
              Whether you're living with epilepsy, a caregiver, or an advocate, your voice matters. Together we can end the stigma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full text-lg px-8">
                Get Involved
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Donate Now
              </Button>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
