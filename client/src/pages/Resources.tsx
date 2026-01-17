import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, Phone } from "lucide-react";

export default function Resources() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Resources & Support</h1>
          <p className="text-xl text-muted-foreground">
            You are not alone. Connect with organizations, find support groups, and access educational materials.
          </p>
        </div>
      </section>

      <div className="container max-w-5xl space-y-12">
        {/* National Organizations */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            National Organizations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Epilepsy Foundation</CardTitle>
                <CardDescription>The leading national organization dedicated to the welfare of people with epilepsy.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Provides advocacy, education, research funding, and local support networks across the United States.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.epilepsy.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Centers for Disease Control (CDC)</CardTitle>
                <CardDescription>Official government health information and statistics.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Offers comprehensive data, research updates, and public health initiatives related to epilepsy.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.cdc.gov/epilepsy" target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">CURE Epilepsy</CardTitle>
                <CardDescription>Citizens United for Research in Epilepsy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A non-profit organization dedicated to finding a cure for epilepsy by promoting and funding patient-focused research.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.cureepilepsy.org" target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">American Epilepsy Society</CardTitle>
                <CardDescription>Professional society for epilepsy specialists.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Promotes research and education for professionals dedicated to the prevention, treatment, and cure of epilepsy.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.aesnet.org" target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Helplines */}
        <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Phone className="w-8 h-8 text-primary" />
            Helplines & Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Epilepsy & Seizures 24/7 Helpline</h3>
              <p className="text-muted-foreground">
                The 24/7 Helpline has trained information specialists standing by to answer your questions about epilepsy and seizures and provide you with help, hope, and support.
              </p>
              <div className="text-2xl font-bold text-primary">1-800-332-1000</div>
              <p className="text-sm text-muted-foreground">En Español: 1-866-748-8008</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Suicide & Crisis Lifeline</h3>
              <p className="text-muted-foreground">
                If you or someone you know is struggling or in crisis, help is available. You can call or text 988 or chat 988lifeline.org.
              </p>
              <div className="text-2xl font-bold text-primary">988</div>
            </div>
          </div>
        </section>

        {/* Educational Materials */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Educational Materials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-secondary/20 border-none">
              <CardHeader>
                <CardTitle className="text-lg">Seizure Action Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A downloadable form to help you organize your seizure information and emergency response plan.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary">Download PDF &rarr;</Button>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-none">
              <CardHeader>
                <CardTitle className="text-lg">School Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Information for teachers and school nurses on how to support students with epilepsy.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary">Download PDF &rarr;</Button>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-none">
              <CardHeader>
                <CardTitle className="text-lg">Workplace Accommodations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Guide for employers and employees on managing epilepsy in the workplace.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary">Download PDF &rarr;</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
