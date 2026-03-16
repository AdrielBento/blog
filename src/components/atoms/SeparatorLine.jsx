import * as Separator from "@radix-ui/react-separator";

export default function SeparatorLine({ className = "atomic-separator" }) {
  return (
    <Separator.Root
      decorative
      orientation="horizontal"
      className={className}
    />
  );
}
