"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { contactContent, services } from "@/lib/content";
import { sendContactMessage } from "@/lib/contact";
import { siteConfig } from "@/lib/site";
import type { ContactMessage } from "@/types/content";

type Errors = {
  name?: string;
  phone?: string;
  message?: string;
};

type Status = "idle" | "sending" | "success" | "error";

const GENERAL = "Orçamento geral";
const contacts = siteConfig.whatsappContacts;

const initialValues: ContactMessage = {
  name: "",
  phone: "",
  service: GENERAL,
  message: "",
  contact: contacts[0].number,
};

function validate(values: ContactMessage): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Informe o seu nome.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (values.phone.trim() !== "" && (digits.length < 10 || digits.length > 13)) {
    errors.phone = "Informe um telefone com DDD.";
  }

  if (values.message.trim().length < 10) {
    errors.message =
      "Conte um pouco mais sobre o que você precisa (mínimo de 10 caracteres).";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactMessage>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceNames = services
    .filter((service) => service.published)
    .map((service) => service.name);

  const handleChange =
    (field: keyof ContactMessage) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    const result = await sendContactMessage(values);

    if (result.ok) {
      setStatus("success");
      setValues(initialValues);
    } else {
      setErrorMessage(result.error ?? "Não foi possível enviar a mensagem.");
      setStatus("error");
    }
  };

  // Tela de confirmação depois do envio.
  if (status === "success") {
    return (
      <div className="sl-form__success" role="status">
        <h3>{contactContent.successTitle}</h3>
        <p className="sl-muted">{contactContent.successMessage}</p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form className="sl-form" onSubmit={handleSubmit} noValidate>
      <div className="sl-form__field">
        <label className="sl-form__label" htmlFor="contato-nome">
          Nome
        </label>
        <input
          id="contato-nome"
          className="sl-form__control"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "erro-nome" : undefined}
        />
        {errors.name && (
          <span id="erro-nome" className="sl-form__error">
            {errors.name}
          </span>
        )}
      </div>

      <div className="sl-form__field">
        <label className="sl-form__label" htmlFor="contato-telefone">
          Telefone com DDD (opcional)
        </label>
        <input
          id="contato-telefone"
          className="sl-form__control"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange("phone")}
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "erro-telefone" : undefined}
        />
        {errors.phone && (
          <span id="erro-telefone" className="sl-form__error">
            {errors.phone}
          </span>
        )}
      </div>

      <div className="sl-form__field">
        <label className="sl-form__label" htmlFor="contato-servico">
          Serviço
        </label>
        <select
          id="contato-servico"
          className="sl-form__control"
          value={values.service}
          onChange={handleChange("service")}
        >
          <option value={GENERAL}>{GENERAL}</option>
          {serviceNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {contacts.length > 1 && (
        <div className="sl-form__field">
          <label className="sl-form__label" htmlFor="contato-destino">
            Falar com
          </label>
          <select
            id="contato-destino"
            className="sl-form__control"
            value={values.contact}
            onChange={handleChange("contact")}
          >
            {contacts.map((contact) => (
              <option key={contact.number} value={contact.number}>
                {contact.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="sl-form__field">
        <label className="sl-form__label" htmlFor="contato-mensagem">
          Mensagem
        </label>
        <textarea
          id="contato-mensagem"
          className="sl-form__control"
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "erro-mensagem" : undefined}
        />
        {errors.message && (
          <span id="erro-mensagem" className="sl-form__error">
            {errors.message}
          </span>
        )}
      </div>

      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </Button>

      {status === "error" && (
        <p className="sl-form__error" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}