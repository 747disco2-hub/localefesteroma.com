import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEOHead from "@/components/seo/SEOHead";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        flushList();
        return;
      }

      // Headers
      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index}>{trimmed.replace("## ", "")}</h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index}>{trimmed.replace("### ", "")}</h3>
        );
      } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        flushList();
        elements.push(
          <p key={index} className="font-semibold text-foreground">
            {trimmed.replace(/\*\*/g, "")}
          </p>
        );
      } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        inList = true;
        listItems.push(trimmed.replace(/^[-*] /, ""));
      } else if (trimmed.startsWith("|")) {
        // Skip table formatting for now
      } else {
        flushList();
        // Handle bold text within paragraphs
        const formattedText = trimmed.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="text-foreground font-medium">$1</strong>'
        );
        elements.push(
          <p 
            key={index} 
            dangerouslySetInnerHTML={{ __html: formattedText }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      "@type": "Organization",
      name: "LocaleFesteRoma",
    },
    publisher: {
      "@type": "Organization",
      name: "LocaleFesteRoma",
      url: "https://localefesteroma.com",
    },
  };

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.publishedDate}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <article className="section-padding">
        <div className="container-narrow">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Tutti gli articoli
          </Link>

          <header className="mb-10">
            <h1 className="text-foreground">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} di lettura
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedDate).toLocaleDateString("it-IT", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-6 lg:p-8 bg-secondary rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Star className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  Cerchi la location perfetta?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  747 Disco è la location più recensita di Roma per feste private. 
                  Scopri perché centinaia di clienti l'hanno scelta per il loro evento speciale.
                </p>
                <a
                  href="https://747disco.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 btn-primary"
                >
                  Scopri 747 Disco
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold mb-6">
              Articoli Correlati
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <h4 className="font-medium text-foreground line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {relatedPost.readTime}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
