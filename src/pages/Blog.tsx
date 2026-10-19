import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog Feste Private Roma | Consigli e Guide"
        description="Articoli, guide e consigli pratici per organizzare feste private a Roma. Tutto su location, budget, invitati e organizzazione eventi."
        canonical="/blog"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Torna alla Home
            </Link>
            <h1>Blog: Guide e Consigli per Feste Private</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Articoli pratici per aiutarti a organizzare la festa perfetta a Roma. 
              Dai consigli sul budget alle guide sulla scelta della location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-xl overflow-hidden border border-border card-hover"
              >
                <div className="aspect-[16/10] bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl text-primary/30">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                    <span>{new Date(post.publishedDate).toLocaleDateString("it-IT")}</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
