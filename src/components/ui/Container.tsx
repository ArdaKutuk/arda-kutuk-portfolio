import { container, containerWide } from "@/lib/styles";

export default function Container({
  children,
  className = "",
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return <div className={`${wide ? containerWide : container} ${className}`}>{children}</div>;
}
