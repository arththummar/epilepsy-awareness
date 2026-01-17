import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Epilepsy</h1>
          <p className="text-xl text-muted-foreground">
            Epilepsy is a chronic noncommunicable disease of the brain that affects people of all ages.
          </p>
        </div>
      </section>

      <div className="container grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">What is Epilepsy?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Epilepsy is a central nervous system (neurological) disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness.
              </p>
              <p className="mb-4">
                Anyone can develop epilepsy. Epilepsy affects both males and females of all races, ethnic backgrounds and ages.
              </p>
              <p>
                Seizure symptoms can vary widely. Some people with epilepsy simply stare blankly for a few seconds during a seizure, while others repeatedly twitch their arms or legs. Having a single seizure doesn't mean you have epilepsy. At least two unprovoked seizures are generally required for an epilepsy diagnosis.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Key Facts & Statistics</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-card border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-primary text-4xl font-bold">2.9M</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Adults in the US have active epilepsy</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-primary text-4xl font-bold">456K</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Children in the US have active epilepsy</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-primary text-4xl font-bold">$24.5B</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Annual healthcare spending for epilepsy in the US</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-primary text-4xl font-bold">70%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Of people could become seizure-free with proper diagnosis and treatment</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Causes & Risk Factors</h2>
            <p className="text-lg text-muted-foreground mb-6">
              For about half the people with epilepsy, the cause is unknown. For the other half, the condition may be traced to various factors, including:
            </p>
            <ul className="space-y-4">
              {[
                "Genetic influence: Some types of epilepsy run in families.",
                "Head trauma: As a result of a car accident or other traumatic injury.",
                "Brain conditions: Brain tumors or strokes.",
                "Infectious diseases: Such as meningitis, AIDS and viral encephalitis.",
                "Prenatal injury: Before birth, babies are sensitive to brain damage that could be caused by several factors.",
                "Developmental disorders: Epilepsy can sometimes be associated with developmental disorders, such as autism."
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 h-2 w-2 rounded-full bg-accent mt-2.5 mr-4"></span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <Card className="bg-primary text-primary-foreground border-none">
            <CardHeader>
              <CardTitle className="text-2xl">Did You Know?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Epilepsy is one of the oldest known medical conditions, with written records dating back to 4000 BC.
              </p>
              <Separator className="bg-primary-foreground/20" />
              <p>
                Many famous people have had epilepsy, including Julius Caesar, Napoleon Bonaparte, and Theodore Roosevelt.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg overflow-hidden">
            <img 
              src="/images/icon-brain-health.png" 
              alt="Brain Health" 
              className="w-full h-48 object-cover bg-white p-4"
            />
            <CardContent className="pt-6">
              <h3 className="font-bold text-xl mb-2">Living with Epilepsy</h3>
              <p className="text-muted-foreground mb-4">
                With the right treatment, most people with epilepsy can live full, active lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
