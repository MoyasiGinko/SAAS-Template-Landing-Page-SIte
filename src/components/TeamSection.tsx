import { useTranslation } from "react-i18next";

export default function TeamSection() {
  const { t } = useTranslation();
  const team = t("team", { returnObjects: true }) as any;
  return (
    <section>
      <h1>{team.title}</h1>
      <p>{team.intro}</p>
      <h2>{t("team.certifications")}</h2>
      <ul>
        {team.certifications &&
          team.certifications.map((c: string, i: number) => (
            <li key={i}>{c}</li>
          ))}
      </ul>
    </section>
  );
}
