import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "End to End Data Engineering/Analytics Project using PostgreSQL, Python, Google Sheets API & Tableau",
      description: "Building a data warehouse with SQL, performing the ETL processes and data modeling to make it ready for further analytics, and also performing the analytics on modeled data.",
      technologies: ["SQL","Python","Tableau"],
      highlights: [
        "Designed Medallion-structured Data Warehouse (Bronze-Silver-Gold) integrating ERP & CRM data into PostgreSQL",
        "Developed a fully automated analytics pipeline to feed a dynamic, interactive Tableau dashboard",
        "Visualized KPIs such as Total Sales, AOV, and regional/category performance."
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Adh101/End-to-end-Data-Engineering-Analytics-Project-using-PostgresSQL-Python-Google-Sheets-Tableau",
      category: "Data Engineering"
    },
    {
      title: "IPL Data Analytics Pipeline using AWS and Databricks",
      description: "Data Analytics Pipeline by ingesting data into Amazon S3 from Data.world and analyzing it using the Databricks with PySpark and SparkSQL.",
      technologies: ["Python", "Apache Spark", "AWS", "Databricks"],
      highlights: [
        "Designed and implemented a cloud-native ETL pipeline to extract raw IPL cricket data from the data.world, ingest into Amazon S3, and orchestrate transformations within Databricks.",
        "Built Spark-based transformations in Databricks notebooks to clean, standardize, and analyze large datasets, enabling advanced insights on player and match performance.",
        "Delivered exploratory data analysis (EDA) and visualizations within Databricks, improving accessibility of cricket analytics for downstream reporting and BI use cases."
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Adh101/IPL-Data-Analysis-Pipeline-with-AWS-and-Databricks",
      category: "Data Engineering"
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
              asChild
            >
              <a href="https://github.com/Adh101" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;