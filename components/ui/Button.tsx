import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  return (
    <button
      className={clsx(
        "rounded-lg px-4 py-2 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-primary text-bg hover:bg-primaryDark"
          : "border border-border bg-surface text-text hover:border-primary",
        className,
      )}
      {...props}
    />
  );
}
