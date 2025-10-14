import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Database, 
  BarChart3, 
  Cloud, 
  Code, 
  Brain, 
  Workflow 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Data Engineering",
      skills: [
        "Apache Spark",
        "Apache Kafka",
        "ETL/ELT"
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Analytics & BI",
      skills: [
        "Tableau",
        "Power BI",
        "Looker",
        "Data Modeling",
        "Statistical Analysis"
      ]
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Machine Learning",
      skills: [
        "TensorFlow",
        "scikit-learn",
        "PyTorch",
        "MLflow",
        "Feature Engineering"
      ]
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Cloud Platforms",
      skills: [
        "AWS",
        "Google Cloud",
        "Azure",
        "Snowflake",
        "Databricks"
      ]
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Programming",
      skills: [
        "Python",
        "SQL",
        "R",
        "JavaScript"
      ]
    },
    {
      icon: <Workflow className="h-6 w-6 text-primary" />,
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Airflow",
        "Terraform",
        "Git",
        "CI/CD"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technical proficiency across the modern data stack and analytics ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary" 
                        className="bg-neutral-custom-light text-neutral-custom-dark border-neutral-custom-medium/20 px-3 py-2 text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;