import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { ExternalLink, Award, Calendar } from "lucide-react";
import ciscoDataScience from "../assets/Introduction_to_Data_Science_certificate.pdf";
import ijse from "../assets/IjseCertificate.jpg";
import esoft from "../assets/esoftCertificate.jpg";
import esoftAward from "../assets/esoftAward.jpeg";
import ijseAward from "../assets/ijseAwardPic.jpg";
import { Badge } from "../components/ui/Badge";
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate?: string;
  certificateLink?: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    issueDate: "October 2025",
    certificateLink: ciscoDataScience,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Professional Project in IT",
    issuer: "Ijse",
    issueDate: "December 2024",
    certificateLink: ijse,
    image: ijseAward,
  },
  {
    id: 3,
    title: "Most Outstanding Performance",
    issuer: "Esoft Metro Campus",
    issueDate: "December 2024",
    certificateLink: esoft,
    image: esoftAward,
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Certifications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Professional Certificates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and expanding my expertise through
            industry-recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certificates.map((certificate, index) => (
            <Card
              key={certificate.id}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-30 sm:h-36 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {certificate.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3 pt-0">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-secondary/50 hover:bg-secondary/80 transition-colors"
                  >
                    <Award className="w-3 h-3 mr-1" />
                    {certificate.issuer}
                  </Badge>
                </div>

                {certificate.issueDate && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{certificate.issueDate}</span>
                  </div>
                )}

                {certificate.certificateLink ? (
                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full text-xs"
                    onClick={() =>
                      window.open(certificate.certificateLink, "_blank")
                    }
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Certificate
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs cursor-not-allowed opacity-50"
                    disabled
                  >
                    No link available
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
