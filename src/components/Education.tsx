import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science - Artificial Intelligence",
      institution: "University of South Dakota",
      location: "Vermillion,SD",
      period: "2024 - 2025",
      gpa: "4.0/4.0",
      coursework: [
        "Machine Learning",
        "Statistical Computing",
        "Big Data Analytics",
        "Deep Learning",
        "Data Mining"
      ]
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Pokhara University",
      location: "Nepal",
      period: "2016 - 2021",
      gpa: "3.8/4.0",
      coursework: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Statistics",
        "Linear Algebra",
        "Software Engineering"
      ]
    }
  ];


  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strong academic foundation in computer science and data science
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <h3 className="text-2xl font-bold text-foreground">
                          {edu.degree}
                        </h3>
                      </div>
                      <div className="text-lg font-medium text-primary mb-2">
                        {edu.institution}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                        <span>{edu.location}</span>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="font-medium text-foreground">
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">
                        Relevant Coursework
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-neutral-custom-light text-neutral-custom-dark border-neutral-custom-medium/20"
                        >
                          {course}
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

export default Education;