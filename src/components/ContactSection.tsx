import { useTranslation } from "react-i18next";

type ContactForm = {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  submit: string;
};
type Contact = {
  title: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  form: ContactForm;
};

export default function ContactSection() {
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true }) as Contact;
  const form = contact.form || {};
  return (
    <section>
      <h1>{contact.title}</h1>
      <p>{contact.address}</p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <p>{contact.workingHours}</p>
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
