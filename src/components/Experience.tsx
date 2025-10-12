import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer - Remote",
      company: "SuperAI Brain Inc.",
      location: "San Francisco, CA",
      period: "2022 - 2024",
      description: "Leading data engineering and analytics initiatives for a high-growth self-service platform. Built scalable data pipelines processing large enterprise datasets.",
      achievements: [
        "Modeled enterprise datasets and build ETL/ML pipelines processing large records, cutting runtime by 40%.",
        "Managed Snowflake with robust unit/integration/data-quality tests and accelerating analytics across multiple data sources.",
        "Worked on the automated EDA and data-cleaning features in the SuperAI self-serve analytics platform.",
        "Integrated Power BI/Tableau to an in-house LLM, enabling natural-language ad-hoc analysis for non-technical users."
      ],
      technologies: ["Python", "SQL", "Apache Spark", "Kafka", "Flink", "AWS", "Snowflake", "Databricks", "Power BI"]
    },
    {
      title: "Research Data Analyst",
      company: "Ingrails Pvt.Ltd",
      location: "Nepal",
      period: "2020 - 2022",
      description: "Developed analytics solutions for market research and operational excellence, acquiring data from various resources.",
      achievements: [
        "Built Python/SQL pipelines to ingest and clean multi-source marketing & CRM data, boosting model accuracy while upholding data governance.",
        "Developed K-Means + logistic regression on 100K+ records to segment customers and predict churn, enabling campaigns that cut churn 30%.",
        "Delivered Tableau dashboards and automated reports, reducing manual reporting time by 40% for cross-functional teams."
      ],
      technologies: ["SQL", "Python", "Tableau", "PostgreSQL", "Machine Learning"]
    },
    {
      title: "Data Analyst",
      company: "Freshktm Pvt Ltd",
      location: "Nepal",
      period: "2019 - 2020",
      description: "Started career building predictive models and automated reporting systems for agri-tech supply chain system.",
      achievements: [
        "Built SQL-based supply chain pipelines integrating ERP inventory systems, improving operational efficiency by 20%.",
        " Developed ARIMA and Prophet-based forecasting models, improving prediction accuracy by 25% and reducing stockouts by 15%.",
        "Developed and maintained Tableau dashboards with weekly refreshes, reducing executive reporting time."
      ],
      technologies: ["Python", "Tableau", "PostgresSQL", "Git", "Jupyter","Time Series Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building data-driven solutions across diverse industries and scales
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-neutral-custom-light text-neutral-custom-dark border-neutral-custom-medium/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;