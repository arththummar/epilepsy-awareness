import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Clock, Phone, AlertTriangle } from "lucide-react";

export default function FirstAid() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Seizure First Aid</h1>
          <p className="text-xl text-muted-foreground">
            Most seizures are not medical emergencies and end on their own. Knowing what to do can keep a person safe.
          </p>
        </div>
      </section>

      <div className="container max-w-5xl space-y-16">
        {/* General Steps */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary/10 p-3 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">General First Aid Steps</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                { title: "Stay Calm", desc: "Keep yourself and others calm. Stay with the person until they are awake and alert." },
                { title: "Keep Safe", desc: "Move dangerous objects out of the way. If they are wandering, guide them away from danger." },
                { title: "Turn on Side", desc: "If they are not awake or aware, turn them on their side to keep their airway clear." },
                { title: "Time It", desc: "Note the time the seizure starts and ends." },
                { title: "Comfort", desc: "Speak calmly. When they are alert, tell them what happened in simple terms." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/first-aid-guide.jpg" 
                alt="Seizure First Aid Illustration" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* What NOT to do */}
        <section className="bg-destructive/5 p-8 rounded-3xl border border-destructive/20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-destructive/10 p-3 rounded-full">
              <XCircle className="w-8 h-8 text-destructive" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">What NOT To Do</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Do NOT hold the person down or try to stop their movements.",
              "Do NOT put anything in their mouth. They cannot swallow their tongue.",
              "Do NOT give mouth-to-mouth breaths during a seizure.",
              "Do NOT offer water or food until they are fully alert."
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-sm bg-white/50">
                <CardContent className="pt-6">
                  <p className="font-medium text-destructive-foreground/80">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* When to Call 911 */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-accent/20 p-3 rounded-full">
              <Phone className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">When to Call 911</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-destructive shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Seizure lasts longer than 5 minutes</h3>
                    <p className="text-muted-foreground">Prolonged seizures can be dangerous and require medical intervention.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Repeated seizures</h3>
                    <p className="text-muted-foreground">If another seizure happens soon after the first one without regaining consciousness.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Difficulty breathing</h3>
                    <p className="text-muted-foreground">If the person has trouble breathing or waking up after the seizure.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Injury or Water</h3>
                    <p className="text-muted-foreground">If the seizure happens in water or if the person is injured during the seizure.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive shadow-lg md:col-span-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Special Circumstances</h3>
                    <p className="text-muted-foreground">Call 911 if the person has never had a seizure before, is pregnant, or has diabetes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
