import { useState } from "react";
import { Card, CardContent } from "../components/ui/Card.tsx";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSpringboot,
  SiSpring,
  SiPython,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiExpress,
  SiVercel,
  SiMongoose,
  SiScikitlearn,
  SiBootstrap,
  SiJquery,
  SiIntellijidea,
  SiPlotly,
  SiRedux,
  SiFastapi,
  SiStreamlit,
  SiAxios,
  SiSass,
  SiPostman,
} from "react-icons/si";

import { Coffee, Brain, Network, Layers } from "lucide-react";
import { Code2, Database, Wrench } from "lucide-react";
import { MdOutlineShowChart } from "react-icons/md";

/* ===================== DATA ===================== */

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: 70 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 75 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 70 },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
      { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 90 },
      { name: "SASS", icon: SiSass, color: "#CC6699", level: 72 },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", level: 70 },
      { name: "jQuery", icon: SiJquery, color: "#0769AD", level: 70 },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC", level: 78 },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        level: 88,
      },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Java", icon: Coffee, color: "#007396", level: 88 },
      { name: "Spring", icon: SiSpring, color: "#6DB33F", level: 82 },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF", level: 70 },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: 85 },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 75 },
      { name: "JSP", icon: Layers, color: "#F89820", level: 70 },
      { name: "Servlets", icon: Network, color: "#F89820", level: 70 },
      { name: "FastAPI", icon: SiFastapi, color: "#009688", level: 70 },
      { name: "REST APIs", icon: Network, color: "#0EA5E9", level: 80 },
    ],
  },
  {
    title: "Database & Tools",
    icon: Wrench,
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 65 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 65 },
      { name: "Mongoose", icon: SiMongoose, color: "#880000", level: 70 },
      { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF", level: 88 },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF", level: 50 },
      { name: "Axios", icon: SiAxios, color: "#5A29E4", level: 60 },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 75 },
      {
        name: "IntelliJ IDEA",
        icon: SiIntellijidea,
        color: "#FE315D",
        level: 70,
      },
    ],
  },
  {
    title: "Data Science & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB", level: 90 },
      { name: "Pandas", icon: SiPandas, color: "#150458", level: 65 },
      { name: "NumPy", icon: SiNumpy, color: "#013243", level: 60 },
      {
        name: "Seaborn",
        icon: MdOutlineShowChart,
        color: "#4C72B0",
        level: 60,
      },
      { name: "Plotly Express", icon: SiPlotly, color: "#3F4F75", level: 60 },
      {
        name: "Scikit-Learn",
        icon: SiScikitlearn,
        color: "#F7931E",
        level: 50,
      },
      {
        name: "Matplotlib",
        icon: MdOutlineShowChart,
        color: "#11557C",
        level: 65,
      },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626", level: 85 },
      { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B", level: 85 },
    ],
  },
];

const skillNavCategories = skillCategories.map((c) => c.title);

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    skillCategories[0].title
  );

  const activeCategory = skillCategories.find(
    (category) => category.title === selectedCategory
  );

  if (!activeCategory) return null;

  const CategoryIcon = activeCategory.icon;

  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            A focused view of the technologies and tools I actively work with
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {skillNavCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border transition-colors text-sm ${
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

        <div className="flex justify-center">
          <Card className="w-full max-w-4xl overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.2)] animate-fade-in">
            {/* CATEGORY HEADER */}
            <div className="flex items-center justify-center gap-3 px-6 py-4 bg-background/60 border-b border-border/50">
              <div className="p-3 rounded-xl bg-primary/10">
                <CategoryIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                {activeCategory.title}
              </h3>
            </div>

            {/* SKILLS */}
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
                {activeCategory.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group/skill flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div className="relative">
                        <SkillIcon
                          className="w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-300 group-hover/skill:scale-110"
                          style={{ color: skill.color }}
                        />
                        <div
                          className="absolute inset-0 blur-xl opacity-0 group-hover/skill:opacity-40 transition-opacity duration-300"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>

                      <span className="text-xs sm:text-sm font-medium text-foreground text-center">
                        {skill.name}
                      </span>

                      <div className="w-full h-1.5 bg-secondary/50 rounded-full overflow-hidden mt-1">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
