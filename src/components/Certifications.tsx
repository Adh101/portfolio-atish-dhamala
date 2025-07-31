import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    "AWS Certified Data Analytics",
    "Google Cloud Professional Data Engineer",
    "Snowflake SnowPro Core",
    "Tableau Desktop Specialist",
    "Microsoft Azure Data Scientist",
    "Databricks Certified Data Engineer",
    "Apache Spark Developer",
    "MongoDB Certified Developer"
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-recognized certifications demonstrating expertise across data platforms
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-neutral-custom-light text-neutral-custom-dark border-neutral-custom-medium/20 p-3 text-center justify-center text-sm font-medium"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;