import { useTranslation } from "react-i18next";

export default function LegalSection() {
  const { t } = useTranslation();
  type LegalType = {
    privacyPolicy: { title: string; content: string };
    termsAndConditions: { title: string; content: string };
    disclaimer: { title: string; content: string };
  };
  const legal = t("legal", { returnObjects: true }) as LegalType;
  return (
    <section>
      <h1>{legal.privacyPolicy.title}</h1>
      <p>{legal.privacyPolicy.content}</p>
      <h1>{legal.termsAndConditions.title}</h1>
      <p>{legal.termsAndConditions.content}</p>
      <h1>{legal.disclaimer.title}</h1>
      <p>{legal.disclaimer.content}</p>
    </section>
  );
}
