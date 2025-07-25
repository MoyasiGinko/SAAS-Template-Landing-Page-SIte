import { useTranslation } from "react-i18next";

interface AboutContent {
  title: string;
  companyProfile: string;
  vision: string;
  mission: string;
  values: string[];
}

export default function AboutSection() {
  const { t } = useTranslation();
  const about = t("about", { returnObjects: true }) as AboutContent;
  return (
    <section>
      <h1>{about.title}</h1>
      <p>{about.companyProfile}</p>
      <h2>{t("about.vision")}</h2>
      <p>{about.vision}</p>
      <h2>{t("about.mission")}</h2>
      <p>{about.mission}</p>
      <h3>{t("about.values")}</h3>
      <ul>
        {about.values &&
          about.values.map((v: string, i: number) => <li key={i}>{v}</li>)}
      </ul>
    </section>
  );
}
