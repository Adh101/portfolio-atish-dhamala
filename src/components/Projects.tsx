import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Real-time Analytics Platform",
      description: "Built a scalable real-time analytics platform processing 1M+ events per second with sub-second latency for e-commerce insights.",
      technologies: ["Apache Kafka", "Apache Spark", "Redis", "React", "Python", "AWS"],
      highlights: [
        "99.9% uptime with automatic failover",
        "Real-time dashboard with 500ms refresh rate",
        "Machine learning-powered anomaly detection"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Adh101/End-to-end-Data-Engineering-Analytics-Project-using-PostgresSQL-Python-Google-Sheets-Tableau",
      category: "Data Engineering"
    },
    {
      title: "Customer Churn Prediction ML Model",
      description: "Developed and deployed machine learning models to predict customer churn with 94% accuracy, resulting in $2M+ annual savings.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "MLflow", "Docker", "Kubernetes"],
      highlights: [
        "94% prediction accuracy on test data",
        "Automated retraining pipeline",
        "A/B testing framework for model validation"
      ],
      demoUrl: "#",
      githubUrl: "#",
      category: "Machine Learning"
    },
    {
      title: "Financial Risk Assessment Dashboard",
      description: "Created comprehensive risk assessment dashboard for financial portfolio management with real-time market data integration.",
      technologies: ["Tableau", "Python", "PostgreSQL", "Alpha Vantage API", "AWS Lambda"],
      highlights: [
        "Real-time portfolio risk visualization",
        "Automated compliance reporting",
        "Integration with 10+ data sources"
      ],
      demoUrl: "#",
      githubUrl: "#",
      category: "Business Intelligence"
    },
    {
      title: "Data Lake Migration Project",
      description: "Led migration of legacy data warehouse to modern data lake architecture, improving query performance by 10x.",
      technologies: ["AWS S3", "AWS Glue", "Apache Parquet", "Terraform", "Python", "Snowflake"],
      highlights: [
        "10x improvement in query performance",
        "70% reduction in storage costs",
        "Zero downtime migration strategy"
      ],
      demoUrl: "#",
      githubUrl: "#",
      category: "Data Engineering"
    }
  ];

  const categories = ["All", "Data Engineering", "Machine Learning", "Business Intelligence"];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing impactful data solutions that drive business value and innovation
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-border text-muted-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;