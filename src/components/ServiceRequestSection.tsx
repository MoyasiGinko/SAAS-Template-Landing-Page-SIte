import { useTranslation } from "react-i18next";

type ServiceRequestForm = {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  submit: string;
};
type ServiceRequest = {
  title: string;
  intro: string;
  form: ServiceRequestForm;
};

export default function ServiceRequestSection() {
  const { t } = useTranslation();
  const sr = t("serviceRequest", { returnObjects: true }) as ServiceRequest;
  const form = sr.form || {};
  return (
    <section>
      <h1>{sr.title}</h1>
      <p>{sr.intro}</p>
      <form>
        <label>
          {form.fullName}
          <input name="fullName" />
        </label>
        <br />
        <label>
          {form.email}
          <input name="email" type="email" />
        </label>
        <br />
        <label>
          {form.phone}
          <input name="phone" />
        </label>
        <br />
        <label>
          {form.serviceType}
          <input name="serviceType" />
        </label>
        <br />
        <label>
          {form.message}
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">{form.submit}</button>
      </form>
    </section>
  );
}
