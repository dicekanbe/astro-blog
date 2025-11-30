import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";

const Button = ({
  label,
  link,
  style,
  rel,
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
}) => {
  return (
    <ShadcnButton
      asChild
      variant={style === "outline" ? "outline" : "default"}
      className="mb-4 me-4"
    >
      <a
        href={link}
        target="_blank"
        rel={`noopener noreferrer ${
          rel ? (rel === "follow" ? "" : rel) : "nofollow"
        }`}
      >
        {label}
      </a>
    </ShadcnButton>
  );
};

export default Button;
