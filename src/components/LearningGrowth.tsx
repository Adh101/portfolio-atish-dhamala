import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Target, Users, Lightbulb, TrendingUp, Calendar } from 'lucide-react';

const LearningGrowth = () => {
  const currentLearning = [
    {
      title: "Advanced Apache Kafka for Data Streaming",
      platform: "Confluent Academy",
      status: "In Progress",
      progress: "75%",
      completion: "Feb 2025"
    },
    {
      title: "AWS Solutions Architect Associate",
      platform: "A Cloud Guru",
      status: "In Progress", 
      progress: "60%",
      completion: "Mar 2025"
    },
    {
      title: "Real-Time Analytics with Apache Flink",
      platform: "Udemy",
      status: "Starting Soon",
      progress: "0%",
      completion: "Apr 2025"
    }
  ];

  const learningProjects = [
    {
      title: "Personal Finance ETL Pipeline",
      description: "Built end-to-end pipeline using Python, Apache Airflow, and PostgreSQL to analyze spending patterns",
      technologies: ["Python", "Airflow", "PostgreSQL", "Docker"],
      outcome: "Automated monthly financial reports"
    },
    {
      title: "Real-time Twitter Sentiment Analysis",
      description: "Streaming analytics project using Kafka, Spark, and Elasticsearch for live sentiment tracking",
      technologies: ["Kafka", "Spark", "Elasticsearch", "Python"],
      outcome: "Real-time dashboard with 1-second latency"
    },
    {
      title: "Stock Market Data Warehouse",
      description: "Dimensional modeling project with daily ETL processes using dbt and Snowflake",
      technologies: ["dbt", "Snowflake", "Python", "GitHub Actions"],
      outcome: "Historical analysis of 5 years of market data"
    }
  ];

  const learningGoals = [
    "Master container orchestration with Kubernetes for data workloads",
    "Develop expertise in stream processing with Apache Flink",
    "Build production-ready MLOps pipelines using MLflow and Kubeflow",
    "Contribute to open-source data engineering projects",
    "Achieve AWS Solutions Architect Professional certification"
  ];

  const learningResources = [
    {
      category: "Books",
      items: ["Designing Data-Intensive Applications", "The Data Warehouse Toolkit", "Fundamentals of Data Engineering"]
    },
    {
      category: "Platforms",
      items: ["DataCamp", "Pluralsight", "Linux Academy", "Coursera"]
    },
    {
      category: "Communities",
      items: ["Data Engineering Weekly", "dbt Community", "r/dataengineering", "Local Data Meetups"]
    },
    {
      category: "Podcasts",
      items: ["Data Engineering Podcast", "The Analytics Engineering Podcast", "DataTalks.Club"]
    }
  ];

  const growthActivities = [
    "Participated in 3 virtual data engineering hackathons (2024)",
    "Regular contributor to open-source dbt packages",
    "Active member of local Data & Analytics meetup group",
    "Completed 15+ hands-on data engineering labs on AWS",
    "Built and shared 8 technical blog posts on LinkedIn"
  ];

  return (
    <section id="learning-growth" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learning & Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Committed to continuous learning and professional development in the rapidly evolving data landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Current Learning */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Current Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentLearning.map((course, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{course.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {course.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{course.platform}</p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Progress: {course.progress}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {course.completion}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Goals */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Target className="h-6 w-6 text-primary" />
                  2025 Learning Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {learningGoals.map((goal, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{goal}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Projects */}
          <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Lightbulb className="h-6 w-6 text-primary" />
                Self-Directed Learning Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {learningProjects.map((project, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-primary font-medium">
                      <TrendingUp className="h-3 w-3" />
                      {project.outcome}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Learning Resources */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Users className="h-6 w-6 text-primary" />
                  Active Learning Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningResources.map((resource, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-2">{resource.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {resource.items.map((item, itemIndex) => (
                          <Badge key={itemIndex} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Growth Activities */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Growth Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {growthActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-secondary flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{activity}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningGrowth;