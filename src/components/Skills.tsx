import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
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
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Apache Spark", level: 85 },
        { name: "Apache Kafka", level: 80 },
        { name: "ETL/ELT", level: 90 }
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Analytics & BI",
      skills: [
        { name: "Tableau", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Looker", level: 75 },
        { name: "Data Modeling", level: 90 },
        { name: "Statistical Analysis", level: 85 }
      ]
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Machine Learning",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "scikit-learn", level: 85 },
        { name: "PyTorch", level: 75 },
        { name: "MLflow", level: 80 },
        { name: "Feature Engineering", level: 90 }
      ]
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 75 },
        { name: "Azure", level: 70 },
        { name: "Snowflake", level: 80 },
        { name: "Databricks", level: 75 }
      ]
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 80 },
        { name: "Java", level: 70 },
        { name: "Scala", level: 65 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      icon: <Workflow className="h-6 w-6 text-primary" />,
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "Terraform", level: 80 },
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 80 }
      ]
    }
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-tech-blue-light text-tech-blue border-tech-blue/20 p-3 text-center justify-center text-sm font-medium"
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

export default Skills;