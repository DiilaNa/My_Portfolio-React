import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/Card.tsx";
import { Button } from "../components/Button.tsx";
import { Badge } from "../components/Badge.tsx";
import {
  SiReact,
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiSass
} from "react-icons/si";
import { Github, ExternalLink } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { SiHibernate } from "react-icons/si";
import needitdone from "../assets/ProjectPics/Homepage.png";
import bookme from "../assets/ProjectPics/Bookme.png";
import mentalhealth from "../assets/ProjectPics/MentalHealthCenter.png";
import petcarecenter from "../assets/ProjectPics/PerCareCenter.png";
import poss from "../assets/ProjectPics/pos.webp";
import portfolio from "../assets/ProjectPics/portfolio.png";
import tictactoe from "../assets/ProjectPics/tic-tac-toe.png"
import rpsgame from "../assets/ProjectPics/RpsGame.png";
import wtzapp from "../assets/ProjectPics/whatsapp.png"

const projects = [
  {
    id: 1,
    title: "NeedItDone – Home Service Hiring Platform",
    description:
      "A platform that bridges the gap between homeowners and workers.",
    image: needitdone,
    category: "Web Development",
    technologies: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "MySql", icon: SiMysql, color: "#0e87dd" },
      { name: "Javascript", icon: SiJavascript, color: "#dfff00" },
      { name: "Html", icon: SiHtml5, color: "#ea7a10" },
      { name: "Css", icon: SiCss3, color: "#0e87dd" },
    ],
    githubUrl:
      "https://github.com/DiilaNa/NeedItDone-AAD_Final_Project_IJSE.git",
    liveUrl: "",
  },
  {
    id: 2,
    title: "University event Ticket Booking System",
    description: "BookMe streamlines campus event ticketing.",
    image: bookme,
    category: "Web Development",
    technologies: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "NodeJS", icon: SiNodedotjs, color: "#47A248" },
      { name: "SASS", icon: SiSass, color: "#ed1ebe" },
    ],
    githubUrl: "https://github.com/DiilaNa/BookMe.git",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations.",
    image: portfolio,
    category: "Web Development",
    technologies: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
    githubUrl: "https://github.com/DiilaNa/MyPortafolio.git",
    liveUrl: "https://diilana.github.io/MyPortafolio/",
  },
  {
    id: 4,
    title: "Point of Sales System",
    description:
      "A web-based POS interface demonstrating sales functionalities.",
    image: poss,
    category: "Web Development",
    technologies: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
    githubUrl: "https://github.com/DiilaNa/POS_SYSTEM.git",
    liveUrl: "https://diilana.github.io/POS_SYSTEM/",
  },
  {
    id: 5,
    title: "Mental Health Care Center",
    description: "A standalone desktop application with Hibernate ORM.",
    image: mentalhealth,
    category: "Java",
    technologies: [
      { name: "JavaFx", icon: FaJava, color: "#F7DF1E" },
      { name: "MySql", icon: SiMysql, color: "#268ee3" },
      { name: "Hibernate", icon: SiHibernate, color: "#E34F26" },
    ],
    githubUrl:
      "https://github.com/DiilaNa/Serenity_Mental_Health_Therapy_Center-Hibernate.git",
    liveUrl: "",
  },
  {
    id: 6,
    title: "Pet Care Management System",
    description: "A standalone application to manage pet records.",
    image: petcarecenter,
    category: "Java",
    technologies: [
      { name: "JavaFx", icon: FaJava, color: "#F7DF1E" },
      { name: "MySql", icon: SiMysql, color: "#0c93dc" },
    ],
    githubUrl:
      "https://github.com/DiilaNa/IJSE-Final_Project-Layered_Architecture.git",
    liveUrl: "",
  },
  {
    id: 7,
    title: "Tic-Tac-Toe Game",
    description: "Man vs AI... A Game developed using Minmax algorithm.",
    image: tictactoe,
    category: "Java",
    technologies: [
      { name: "JavaFx", icon: FaJava, color: "#F7DF1E" },
      { name: "SceneBuilder", icon: FaJava, color: "#F7DF1E" },
    ],
    githubUrl: "https://github.com/DiilaNa/Tic-Tac-Toe-Game.git",
    liveUrl: "",
  },
  {
    id: 8,
    title: "Rock Paper Scissor Game",
    description: "Simple Game developed to play Rock paper scisors",
    image: rpsgame,
    category: "Java",
    technologies: [
      { name: "JavaFx", icon: FaJava, color: "#F7DF1E" },
      { name: "SceneBuilder", icon: FaJava, color: "#F7DF1E" },
    ],
    githubUrl: "https://github.com/DiilaNa/Tic-Tac-Toe-Game.git",
    liveUrl: "",
  },
  {
    id: 9,
    title: "Chat Application",
    description: "Group chat application using Java SocketIO",
    image: wtzapp,
    category: "Java",
    technologies: [
      { name: "JavaFx", icon: FaJava, color: "#F7DF1E" },
      { name: "SceneBuilder", icon: FaJava, color: "#F7DF1E" },
      { name: "Sockets", icon: FaJava, color: "#F7DF1E" },
    ],
    githubUrl: "https://github.com/DiilaNa/Chat-Appication-Using-SocketIO.git",
    liveUrl: "",
  },
];

const categories = [
  "All",
  "Java",
  "Web Development",
  "Data Science & ML",
  "Mobile App Development",
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        {/* Navbar */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white border-primary"
                  : "bg-card text-muted-foreground border-border hover:bg-primary/20"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid: 3 columns on medium screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="flex items-center gap-1 px-2 py-1 bg-secondary/50 hover:bg-secondary/80 transition-colors text-xs"
                      >
                        <Icon
                          className="w-3 h-3"
                          style={{ color: tech.color }}
                        />
                        <span>{tech.name}</span>
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-2">
                <Button
                  variant="hero"
                  size="sm"
                  className="flex-1 min-w-[100px]"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="w-4 h-4 mr-1.5" />
                  GitHub
                </Button>
                {project.liveUrl && (
                  <Button
                    variant="heroOutline"
                    size="sm"
                    className="flex-1 min-w-[100px]"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
