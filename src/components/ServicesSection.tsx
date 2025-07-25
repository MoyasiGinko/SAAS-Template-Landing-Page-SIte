import { useTranslation } from "react-i18next";

type ServiceItem = {
  title: string;
  description: string;
};

type Services = {
  title: string;
  items: ServiceItem[];
};

export default function ServicesSection() {
  const { t } = useTranslation();
  const services = t("services", { returnObjects: true }) as Services;
  return (
    <section>
      <h1>{services.title}</h1>
      <ul>
        {services.items &&
          services.items.map((item: ServiceItem, i: number) => (
            <li key={i}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
