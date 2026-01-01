import { Card, CardContent, CardHeader, CardTitle } from "../components/Card.tsx";
import { GraduationCap } from "lucide-react";
import aat from "../assets/aat.png";
import ijse from "../assets/Ijse.jpg";
import esoft from "../assets/esoft.webp";
import taxila from "../assets/taxila.jpeg";

const educationData = [
  {
    institution: "Taxila Central College",
    period: "2020 - 2023",
    logo: taxila,
    description: "Advanced Level",
  },
  {
    institution: "ESOFT Metro Campus",
    period: "2023 - 2024",
    logo: esoft,
    description: "Dual Diploma in IT & English",
  },
  {
    institution: "IJSE (Institute of Software Engineering)",
    period: "2024 - Present",
    logo: ijse,
    description: "BSc (Hons) in Computer Science (Topup Degree)",
  },
  {
    institution: "Association of Accounting Technicians",
    period: "2019 - 2021",
    logo: aat,
    description: "Professional Accounting Qualification - Level 02",
  },
];

export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-14 sm:mb-16 animate-fade-in">
                    <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
                        <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
                        Education
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        My academic journey and professional qualifications
                    </p>
                </div>

                {/* Education Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 max-w-7xl mx-auto px-2">

                    {educationData.map((edu, index) => (
                        <Card key={index} className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] animate-fade-out"
                            style={{ animationDelay: `${index * 150}ms` }}>
                            {/* Card glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <CardHeader className="relative pb-4">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                                    {/* Logo */}
                                    <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300 bg-background/80">
                                        <img
                                            src={edu.logo}
                                            alt={`${edu.institution} logo`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <CardTitle className="text-base sm:text-lg md:text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                                            {edu.institution}
                                        </CardTitle>
                                        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-accent font-medium">
                                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                            <span>{edu.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="relative text-center sm:text-left">
                                <p className="text-muted-foreground text-sm sm:text-base md:text-[16px] leading-relaxed">
                                    {edu.description}
                                </p>
                            </CardContent>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </Card>
                    ))}
                </div>

                {/* Decorative footer */}
                <div className="mt-16 text-center">
                    <div className="inline-block px-6 py-3 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-sm">
                        <p className="text-sm sm:text-base text-muted-foreground">
                            Continuously learning and growing 🚀
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
