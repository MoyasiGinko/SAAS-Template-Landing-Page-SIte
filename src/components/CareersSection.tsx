import { useTranslation } from "react-i18next";

type Careers = {
  title: string;
  intro: string;
  howToApply: string;
  currentOpenings: string;
};

export default function CareersSection() {
  const { t } = useTranslation();
  const careers = t("careers", { returnObjects: true }) as Careers;
  return (
    <section>
      <h1>{careers.title}</h1>
      <p>{careers.intro}</p>
      <h2>{t("careers.howToApply")}</h2>
      <p>{careers.howToApply}</p>
      <h2>{t("careers.currentOpenings")}</h2>
      <p>{careers.currentOpenings}</p>
    </section>
  );
}
