type Props = React.ComponentPropsWithoutRef<"button"> & {
  customType?: string;
};

type ButtonStyleType = {
  [key: string]: string;
};

const defaultStyle =
  "rounded-lg border font-semibold px-4 py-[.4375rem] text-sm bg-main text-white";
const buttonVariants: ButtonStyleType = {
  DEFAULT: `${defaultStyle}`,
  DISABLED: `opacity-70 ${defaultStyle}`,
};

export default function Button({ customType, ...props }: Props) {
  const className = `select-none ${buttonVariants[customType ?? "DEFAULT"]} ${
    props.className ?? ""
  }`;
  return <button {...props} className={className} />;
}
