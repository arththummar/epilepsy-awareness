import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SeizureTypes() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Types of Seizures</h1>
          <p className="text-xl text-muted-foreground">
            Seizures are classified into three major groups based on where they start in the brain.
          </p>
        </div>
      </section>

      <div className="container max-w-5xl">
        <Tabs defaultValue="generalized" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto p-1 bg-muted rounded-xl mb-12">
            <TabsTrigger value="generalized" className="py-4 text-lg rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Generalized Onset</TabsTrigger>
            <TabsTrigger value="focal" className="py-4 text-lg rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Focal Onset</TabsTrigger>
            <TabsTrigger value="unknown" className="py-4 text-lg rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Unknown Onset</TabsTrigger>
          </TabsList>

          <TabsContent value="generalized" className="space-y-8">
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Generalized onset seizures affect both sides of the brain or groups of cells on both sides of the brain at the same time.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Tonic-Clonic</CardTitle>
                  <CardDescription>Formerly known as grand mal seizures</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The person loses consciousness, muscles stiffen (tonic), and jerking movements (clonic) are seen. These usually last 1 to 3 minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Absence</CardTitle>
                  <CardDescription>Formerly known as petit mal seizures</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Brief staring spells that look like daydreaming. The person may blink rapidly or smack their lips. These usually last less than 20 seconds.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Atonic</CardTitle>
                  <CardDescription>Also known as drop attacks</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Muscles suddenly become limp. The person's head may nod or they may drop to the ground.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Myoclonic</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Brief, shock-like jerks of a muscle or group of muscles. They usually happen on both sides of the body at the same time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="focal" className="space-y-8">
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Focal onset seizures start in one area or group of cells in one side of the brain. The term "focal" is used instead of "partial" to be more accurate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-primary">Focal Onset Aware</CardTitle>
                    <Badge variant="outline">Awareness Retained</Badge>
                  </div>
                  <CardDescription>Formerly simple partial seizures</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The person is awake and aware during the seizure. They may experience unusual feelings, sensations, or movements but know what is happening.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-primary">Focal Onset Impaired Awareness</CardTitle>
                    <Badge variant="secondary">Awareness Impaired</Badge>
                  </div>
                  <CardDescription>Formerly complex partial seizures</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The person is confused or their awareness is affected. They may not be able to respond to questions or may do repetitive movements (automatisms).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary shadow-md hover:shadow-lg transition-shadow md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Focal to Bilateral Tonic-Clonic</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A seizure that starts in one side of the brain and spreads to both sides. The person usually has an "aura" (warning sign) before the tonic-clonic seizure begins.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="unknown" className="space-y-8">
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Unknown Onset Seizures</h3>
              <p className="text-lg text-muted-foreground mb-6">
                When the beginning of a seizure is not known, it's called an unknown onset seizure. This might happen if a seizure is not witnessed, for example, when seizures happen at night or in a person who lives alone.
              </p>
              <p className="text-lg text-muted-foreground">
                As more information is learned, an unknown onset seizure may later be diagnosed as a focal or generalized seizure.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
