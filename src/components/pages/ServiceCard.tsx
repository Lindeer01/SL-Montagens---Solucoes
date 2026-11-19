import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { formatPrice } from "@/lib/format";
import { getWhatsAppLink } from "@/lib/whatsapp";
import type { IconName, Service } from "@/types/content";

type ServiceCardProps = {
  service: Service;
  categoryTitle: string;
  icon: IconName;
};

export default function ServiceCard({
  service,
  categoryTitle,
  icon,
}: ServiceCardProps) {
  const showPrice = service.price && service.price.type !== "consult";

  return (
    <Card className="sl-svc">
      <div className="sl-svc__media">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.imageAlt ?? service.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="sl-svc__image"
          />
        ) : (
          <span className="sl-svc__placeholder">
            <Icon name={icon} size={40} />
          </span>
        )}
      </div>

      <span className="sl-svc__category">{categoryTitle}</span>
      <h3 className="sl-svc__title">{service.name}</h3>
      <p className="sl-muted">{service.description}</p>
      {showPrice && (
        <p className="sl-svc__price">{formatPrice(service.price)}</p>
      )}

      <div className="sl-svc__actions">
        <Button
          href={getWhatsAppLink(
            `Olá! Gostaria de um orçamento para: ${service.name}.`,
          )}
          external
        >
          Pedir orçamento
        </Button>
      </div>
    </Card>
  );
}