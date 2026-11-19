"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "@/types/content";

type ProjectGalleryProps = {
  projects: Project[];
};

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [category, setCategory] = useState("Todos");
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects],
  );

  const visible = useMemo(
    () =>
      category === "Todos"
        ? projects
        : projects.filter((p) => p.category === category),
    [projects, category],
  );

  // Abre e fecha a janela de ampliação conforme a foto escolhida.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  const current = active !== null ? visible[active] : undefined;

  const go = (step: number) =>
    setActive((index) =>
      index === null ? index : (index + step + visible.length) % visible.length,
    );

  return (
    <>
      {categories.length > 2 && (
        <div
          className="sl-gallery__filters"
          role="group"
          aria-label="Filtrar por categoria"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className="sl-gallery__filter"
              aria-pressed={item === category}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <div className="sl-gallery__grid">
        {visible.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className="sl-gallery__item"
            aria-label={`Ampliar foto: ${project.title}`}
            onClick={() => setActive(index)}
          >
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="sl-gallery__image"
            />
            <span className="sl-gallery__caption">
              <strong>{project.title}</strong>
              <small>{project.category}</small>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="sl-lightbox"
        aria-label={current ? current.title : "Foto ampliada"}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(1);
          if (event.key === "ArrowLeft") go(-1);
        }}
      >
        {current && (
          <>
            <div className="sl-lightbox__stage">
              <Image
                src={current.image}
                alt={current.alt}
                fill
                sizes="(max-width: 1100px) 94vw, 1000px"
                className="sl-lightbox__image"
              />
            </div>
            <div className="sl-lightbox__bar">
              <div className="sl-lightbox__info">
                <strong>{current.title}</strong>
                <span className="sl-muted">{current.category}</span>
                {current.description && (
                  <p className="sl-muted">{current.description}</p>
                )}
              </div>
              <div className="sl-lightbox__actions">
                {visible.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="sl-lightbox__button"
                      aria-label="Foto anterior"
                      onClick={() => go(-1)}
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      className="sl-lightbox__button"
                      aria-label="Próxima foto"
                      onClick={() => go(1)}
                    >
                      →
                    </button>
                  </>
                )}
                <button
                  type="button"
                  className="sl-lightbox__button"
                  aria-label="Fechar"
                  onClick={() => setActive(null)}
                >
                  ✕
                </button>
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}