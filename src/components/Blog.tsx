import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink, TrendingUp } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "How Apache Spark Transformed Distributed Computing — Architecture, Joins & Shuffling Explained!!",
      excerpt: "Week 3 of Zach Wilson’s Data Engineering Bootcamp was a deep dive into Apache Spark — the engine that powers modern distributed data systems. From internal architecture to join strategies and memory management, here’s everything I learned, distilled for data engineers building production pipelines.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Data Engineering",
      tags: ['Apache Spark','Data Engineering'],
      url: "https://medium.com/@atish.dhamala/how-apache-spark-transformed-distributed-computing-architecture-joins-shuffling-explained-65c6e29de0cb"
    },
    {
      title: "Dimensional Data Modeling — Part 2: Idempotency and Slowly Changing Dimensions (SCD Type 2) with NBA Player Stats",
      excerpt: "Exploring the foundation of dimensional data modeling with cumulative table design",
      date: "2023-12-20",
      readTime: "12 min read",
      category: "Dimensional Data Modeing",
      tags: ["Dimensional Data Modeing","SCDs", "Cumulative Table Design"],
      url: "https://medium.com/@atish.dhamala/dimensional-data-modeling-part-2-idempotency-and-slowly-changing-dimensions-scd-type-2-with-eb60f23d1423"
    },
    {
      title: "Dimensional Data Modeling in Action: Building Cumulative Tables with NBA Player Stats",
      excerpt: "Deep dive into Dimensional Data Modeling — the bedrock of analytical systems.",
      date: "2023-11-30",
      readTime: "10 min read",
      category: "Data Modeling",
      tags: ["Dimensional Data Modeing","SCDs", "Cumulative Table Design"],
      url: "https://medium.com/@atish.dhamala/dimensional-data-modeling-in-action-building-cumulative-tables-with-nba-player-stats-392d340a581d"
    },
    {
      title: "Learning ETL with APIs: A Hands-On Journey into Data Engineering",
      excerpt: "From fetching raw JSON data to automating the entire pipeline locally first and moving into cloud automation with GitHub Actions.",
      date: "2023-10-25",
      readTime: "6 min read",
      category: "Data Engineering",
      tags: ["APIs","ETL","Data Pipelines"],
      url: "https://medium.com/@atish.dhamala/learning-etl-with-apis-a-hands-on-journey-into-data-engineering-b11ef5fbde16"
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
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(featuredPost.url, '_blank')}
                  >
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
                    <Badge variant="secondary" className="bg-neutral-custom-light text-neutral-custom-dark text-xs">
                      {post.category}
                    </Badge>
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
                    onClick={() => window.open(post.url, '_blank')}
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