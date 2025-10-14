import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
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
      title: "Trail-Trekker Analytics Pipeline SQLMesh + DuckDB ",
      description: "Built the data warehouse for the data collected by Trail Trekker using DuckDB and data models using SQLMesh. Further, extend the data modeling to understand the subscription changes on a daily basis for their customers.",
      technologies: ["SQL","DuckDB","SQLMesh","Airflow"],
      highlights: [
        "Delivered an end-to-end data pipeline tracking user subscription plan switch paths (from to, monthly to annual) and cancellations.",
        "Built dimensions (with SCD-1 and 2 types) and fact data model to enrich facts (price/limits) for downstream churn, upgrade/downgrade, and MRR/ARR analyses.",
        "Orchestrated hourly updates, removing manual runs and keeping dashboards current."
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Adh101/Trail-Trekker-Data-Analytics-Pipeline-using-SQLMesh-and-DuckDB",
      category: "Business Intelligence"
    },
    {
      title: "Brain MRI 3D Image Segmentation using Deep Learning ",
      description: "Built segmentation model of 3D brain MRI images using Convolutional Neural Networks (CNNs). The primary models used are U-Net and Attention U-Net, which are designed to efficiently capture spatial hierarchies and segment medical images with high precision.",
      technologies: ["Python", "PyTorch", "U-Net", "Attention U-Net", "Image Processing"],
      highlights: [
        "Implemented 3D brain MRI segmentation models using U-Net and Attention U-Net architectures to segment brain tumors and structures from the BraTS 2020 dataset, achieving high precision in identifying tumor cores, edema, and enhancing regions with Dice Coeficients and IoU metrics.",
        "Developed end-to-end training pipeline leveraging TensorFlow and Keras to preprocess and augment 3D MRI data, fine-tune models using Adam optimizer with Total Loss, and evaluate segmentation performance, resulting in improved segmentation accuracy using IoU and Dice Coefficient, achieving accurate segmentation (Final IoU: 0.72 training, 0.63 validation)."
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Adh101/Brain-MRI-3D-Image-Segmenation-using-Deep-Learning",
      category: "Machine Learning"
    },
    {
      title: "Eye Disease Classification from Retinal Scans using Deep Learning ",
      description: "Deep convolutional neural networks with transfer learning to classify retinal images into five severity levels of DR. Leveraging the APTOS 2019 dataset, two state-of-the-art deep learning models, ResNet50 and EfficientNet-B0 models are implemented and fine-tuned.",
      technologies: ["Python", "PyTorch", "ResNet50", "EfficientNet", "Image Processing","CLAHE"],
      highlights: [
        "Built a PyTorch training pipeline end-to-end (datasets, loaders, transforms, training/validation loops) for diabetic retinopathy classification using the APTOS retina fundus dataset, and fine-tuned ResNet-50/EfficientNet with differential LRs, weight decay.",
        "Experimented the both ResNet50 and EfficientNet models with CLAHE-enhanced preprocessing which improved theperformance of both models with ResNet50 achieving 82% accuracy and EfficientNet with almost 80%, significantly better with baseline model with no CLAHE pre processing."
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Adh101/Eye-Disease-Classification-from-Retinal-Scans-Using-Deep-Learning",
      category: "Machine Learning"
    },
    {
     title: "Customer Loan Performance & Interest Analysis — Power BI",
      description: "Built the ineractive Power BI dashboard to analyze the customer loans and impact of different interest rates.",
      technologies: ["Power BI", "DAX", "Growth Analysis","What-if Analysis"],
      highlights: [
        "Business case: Lending team needed to understand profitability and risk by region/scheme/manager and test how interest or tenure changes affect ROI.",
        "Key Methods: What-If simulation showed ROI sensitivity to +/− interest% and tenure; underperforming schemes concentrated in two regions; manager-level drill-through exposed high NPL pockets.",
        "Impact: Scenario planning informed pricing/tenure guidelines; targeted remediation for low-ROI segments; reduced manual Excel modeling and sped portfolio decisions."
      ],
      demoUrl: "#",
      githubUrl: "https://mavenshowcase.com/project/48963",
      category: "Business Intelligence"
    },
    {
     title: "Netflix Content Analytics Dashboard in Tableau ",
      description: "Built an interactive analytics dashboard on 6,000+ Netflix titles, uncovering content gaps and audience trends across countries, genres, and maturity ratings to support data-driven content acquisition strategies.",
      technologies: ["Tableau", "Excel"],
      highlights: [
        "Highlighted that movies (68%) dominate over TV shows, with documentaries and stand-up comedy as fastest growing genres, and revealed a 2015–2019 content surge led by U.S. and India, providing insights into regional expansion opportunities."
      ],
      demoUrl: "#",
      githubUrl: "https://public.tableau.com/app/profile/atish.dhamala/viz/NetflixMoviesTVShows_16699123248450/NetflixMoviesTVShows",
      category: "Business Intelligence"
    }
  ];

  const categories = ["All", "Data Engineering", "Machine Learning", "Business Intelligence"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
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