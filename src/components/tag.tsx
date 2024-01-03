import type { ChangeEventHandler } from "react";

interface TagProps {
  tag: string;
  selected: boolean;
  onClick?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

function Tag({ tag, selected, onClick, disabled }: TagProps) {
  return <span>{tag}</span>;
}

export { Tag };
