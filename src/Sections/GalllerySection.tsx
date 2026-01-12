import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Card } from "../components/ui/Card";
import picone from "../pics/gallery1.png";
import pictwo from "../pics/gallery2.png";
import picthree from "../pics/gallery3.png";
import picfour from "../pics/gallery4.png";
import picfive from "../pics/gallery5.jpeg";
import picsix from "../pics/mydp.jpg";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: picone,
      alt: "Awarding Ceremony - Esoft",
      category: "Esoft Metro Campus",
    },
    {
      id: 2,
      src: pictwo,
      alt: "Casual moment",
      category: "Awarding Ceremony - Esoft",
    },
    {
      id: 3,
      src: picthree,
      alt: "Ijse - Premisess",
      category: "Ijse",
    },
    {
      id: 4,
      src: picfour,
      alt: "Ijse - Student Committee",
      category: "Ijse",
    },
    {
      id: 5,
      src: picsix,
      alt: "Outdoor moment",
      category: "Casual",
    },
    {
      id: 6,
      src: picfive,
      alt: "Team Building Day",
      category: "Ijse - Galle",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-fade-in" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-tight drop-shadow-md">
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into my journey, moments, and experiences
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="group relative overflow-hidden bg-card/40 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-500 cursor-pointer hover:scale-[1.02] animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
                // Vary heights for masonry effect
                gridRowEnd: index % 3 === 1 ? "span 2" : "span 1",
              }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative w-full h-full min-h-[250px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl animate-fade-in p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-3 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card transition-colors border border-primary/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm text-foreground rounded-full text-sm font-medium border border-primary/30">
                {selectedImage.category}
              </span>
              <p className="mt-4 text-muted-foreground">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
