import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Expertise from "@/components/sections/Expertise";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Currently from "@/components/sections/Currently";
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
      <Projects locale={locale} dict={dict} />
      <Expertise dict={dict} />
      <Experience locale={locale} dict={dict} />
      <About dict={dict} />
      <Currently dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
