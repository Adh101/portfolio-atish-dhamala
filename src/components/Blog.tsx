import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink, TrendingUp } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable Data Pipelines with Apache Kafka and Spark",
      excerpt: "Learn how to design and implement robust data pipelines that can handle millions of events per second while maintaining data quality and reliability.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Data Engineering",
      tags: ["Kafka", "Spark", "Python", "Microservices"],
      views: "2.4k",
      url: "#"
    },
    {
      title: "MLOps Best Practices: From Model Development to Production",
      excerpt: "A comprehensive guide to implementing MLOps practices that ensure smooth model deployment, monitoring, and maintenance in production environments.",
      date: "2023-12-20",
      readTime: "12 min read",
      category: "Machine Learning",
      tags: ["MLOps", "Docker", "Kubernetes", "MLflow"],
      views: "3.1k",
      url: "#"
    },
    {
      title: "Real-time Analytics: Processing Streaming Data at Scale",
      excerpt: "Explore the architecture and implementation details of building real-time analytics systems that provide instant insights from streaming data sources.",
      date: "2023-11-30",
      readTime: "10 min read",
      category: "Analytics",
      tags: ["Real-time", "Streaming", "Analytics", "Architecture"],
      views: "1.8k",
      url: "#"
    },
    {
      title: "Data Warehouse vs Data Lake vs Data Lakehouse: A Modern Comparison",
      excerpt: "Understanding the evolution of data storage architectures and when to choose each approach for your organization's data strategy.",
      date: "2023-10-25",
      readTime: "6 min read",
      category: "Data Architecture",
      tags: ["Data Warehouse", "Data Lake", "Lakehouse", "Strategy"],
      views: "4.2k",
      url: "#"
    },
    {
      title: "Advanced SQL Techniques for Data Analysts",
      excerpt: "Master complex SQL patterns, window functions, and optimization techniques that will elevate your data analysis capabilities.",
      date: "2023-09-18",
      readTime: "9 min read",
      category: "SQL",
      tags: ["SQL", "Analytics", "Optimization", "Performance"],
      views: "5.1k",
      url: "#"
    },
    {
      title: "Building a Data-Driven Culture: Lessons from the Trenches",
      excerpt: "Practical insights on how to foster data literacy and create a culture where data drives decision-making across all levels of an organization.",
      date: "2023-08-22",
      readTime: "7 min read",
      category: "Leadership",
      tags: ["Culture", "Leadership", "Strategy", "Data Literacy"],
      views: "2.9k",
      url: "#"
    }
  ];

  const categories = ["All", "Data Engineering", "Machine Learning", "Analytics", "Leadership"];
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <section id="blogs" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing knowledge and insights from the world of data engineering and analytics
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="bg-card border-border hover:shadow-xl transition-shadow duration-300 mb-12">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Featured Post
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div>
                      {featuredPost.views} views
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read Full Article
                  </Button>
                </div>

                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <div className="text-6xl text-primary/20 font-bold">
                    DATA
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regular Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-tech-blue-light text-tech-blue text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.views} views
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium"
                  >
                    Read More →
                  </Button>
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
              <ExternalLink className="mr-2 h-5 w-5" />
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;