import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Database, TrendingUp, Users } from 'lucide-react';
import dataAnalyticsImage from '@/assets/data-analytics-workspace.jpg';

const About = () => {
  const highlights = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Engineering",
      description: "Building robust data pipelines and ETL processes for scalable analytics"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Analytics & BI",
      description: "Creating insightful dashboards and business intelligence solutions"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Machine Learning",
      description: "Implementing predictive models and ML algorithms for data-driven insights"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Cross-functional",
      description: "Collaborating with stakeholders to translate business needs into technical solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate data professional with expertise in transforming raw data into strategic business value
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in data engineering and analytics, I specialize in building 
                  end-to-end data solutions that drive business growth and operational efficiency.
                </p>
                <p>
                  My journey began with a strong foundation in computer science and mathematics, which led me 
                  to pursue advanced analytics and machine learning. I've worked across various industries, 
                  from fintech to healthcare, always focusing on delivering measurable impact through data.
                </p>
                <p>
                  I believe in the power of clean, well-structured data and robust engineering practices to 
                  unlock insights that can transform businesses. My approach combines technical excellence 
                  with strategic thinking to ensure solutions are both innovative and practical.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={dataAnalyticsImage} 
                  alt="Data analytics and engineering workspace with multiple monitors showing data visualizations, charts, and code"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;