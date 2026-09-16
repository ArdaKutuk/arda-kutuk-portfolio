import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Hero from "@/components/sections/Hero";
import Focus from "@/components/sections/Focus";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <Focus dict={dict} />
      <Services dict={dict} />
      <About dict={dict} />
      <Projects locale={locale} dict={dict} />
      <Experience locale={locale} dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
