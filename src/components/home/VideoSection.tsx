const videos = [
  {
    title: "Le domande che ci fate",
    description: "Risposte alle domande più frequenti sul 747 Disco",
    embedUrl: "https://www.youtube.com/embed/JTH8qBfg3sw",
  },
  {
    title: "L'atmosfera",
    description: "Scopri l'energia delle nostre serate",
    embedUrl: "https://www.youtube.com/embed/Ptz3hM1VKiI",
  },
  {
    title: "Il format",
    description: "Come funziona una festa al 747 Disco",
    embedUrl: "https://www.youtube.com/embed/ISZvmpSts2k",
  },
];

export default function VideoSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
            Scopri il <span className="text-primary">747 Disco</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guarda i nostri video per capire cosa ti aspetta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.title}
              className="bg-card border border-border overflow-hidden group"
            >
              <div className="relative aspect-[9/16]">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
