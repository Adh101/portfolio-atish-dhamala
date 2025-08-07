import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar } from 'lucide-react';

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
        </div>
      </div>
    </section>
  );
};

export default LearningGrowth;