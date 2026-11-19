"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { services } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

type Values = {
  name: string;
  phone: string;
  service: string;
  message: string;
  contact: string; // número do WhatsApp que vai receber a mensagem
};

type Errors = {
  name?: string;
  phone?: string;
  message?: string;
};

const GENERAL = "Orçamento geral";
const contacts = siteConfig.whatsappContacts;

const initialValues: Values = {
  name: "",
  phone: "",
  service: GENERAL,
  message: "",
  contact: contacts[0].number,
};

function validate(values: Values): Errors {
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
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const serviceNames = services
    .filter((service) => service.published)
    .map((service) => service.name);

  const handleChange =
    (field: keyof Values) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setSent(false);
      return;
    }

    const lines = [
      `Olá! Meu nome é ${values.name.trim()}.`,
      `Serviço: ${values.service}`,
      "",
      values.message.trim(),
    ];
    if (values.phone.trim()) {
      lines.push("", `Meu telefone: ${values.phone.trim()}`);
    }

    window.open(
      getWhatsAppLink(lines.join("\n"), values.contact),
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

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

      <Button type="submit" size="lg">
        Enviar pelo WhatsApp
      </Button>

      {sent && (
        <p className="sl-form__hint" role="status">
          Abrimos o WhatsApp com a sua mensagem pronta. É só enviar.
        </p>
      )}
    </form>
  );
}