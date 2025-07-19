import { useTranslation } from "react-i18next";

export default function CaseStudiesSection() {
  const { t } = useTranslation();
  const caseStudies = t("caseStudies", { returnObjects: true }) as any;
  return (
    <section>
      <h1>{caseStudies.title}</h1>
      <p>{caseStudies.intro}</p>
      <ul>
        {caseStudies.items && caseStudies.items.length > 0 ? (
          caseStudies.items.map((item: any, i: number) => (
            <li key={i}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))
        ) : (
          <li>No case studies available.</li>
        )}
      </ul>
    </section>
  );
}
