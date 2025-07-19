import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();
  const services = t("services", { returnObjects: true }) as any;
  return (
    <section>
      <h1>{services.title}</h1>
      <ul>
        {services.items &&
          services.items.map((item: any, i: number) => (
            <li key={i}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
