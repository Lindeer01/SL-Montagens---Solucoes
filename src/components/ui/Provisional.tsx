/*
  Marcadores de conteudo provisorio.
  Servem para identificar, de forma visivel, textos e imagens que ainda
  precisam ser substituidos pelo conteudo real da empresa.
*/

type BadgeProps = {
  children?: React.ReactNode;
};

export function ProvisionalBadge({ children = "Texto provisório" }: BadgeProps) {
  return <span className="sl-provisional">{children}</span>;
}

type BoxProps = {
  label: string;
  ratio?: string;
  className?: string;
};

export function ProvisionalBox({
  label,
  ratio = "4 / 3",
  className = "",
}: BoxProps) {
  return (
    <div
      className={`sl-placeholder ${className}`.trim()}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`${label} (conteúdo provisório)`}
    >
      <span className="sl-provisional">Conteúdo provisório</span>
      <span className="sl-placeholder__label">{label}</span>
    </div>
  );
}