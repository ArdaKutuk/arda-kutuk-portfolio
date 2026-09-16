import Link from "next/link";
import Container from "@/components/ui/Container";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// not-found.tsx doesn't receive route params, so this always renders the
// default-locale copy. It's still reached correctly for /tr/* and /en/*
// 404s — only the text itself can't vary by locale here.
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <section className="py-28">
      <Container>
        <span className="text-meta text-accent">404</span>
        <h1 className="text-h1 text-ink mt-4">{dict.notFound.title}</h1>
        <p className="text-body-lg text-body mt-4 max-w-[52ch]">{dict.notFound.description}</p>
        <Link
          href={`/${defaultLocale}`}
          className="text-small font-medium text-ink no-underline inline-flex items-center gap-2 mt-8 hover:text-accent"
        >
          {dict.notFound.cta} →
        </Link>
      </Container>
    </section>
  );
}
