import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { ProvisionalBadge } from "@/components/ui/Provisional";
import { serviceDefaultDetails } from "@/lib/content";
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
  const details = service.details ?? serviceDefaultDetails;

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
            <ProvisionalBadge>Imagem provisória</ProvisionalBadge>
          </span>
        )}
      </div>

      <span className="sl-svc__category">{categoryTitle}</span>
      <h3 className="sl-svc__title">{service.name}</h3>
      <p className="sl-muted">{service.description}</p>

      {details.length > 0 && (
        <ul className="sl-svc__details">
          {details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

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