import { cn } from "@/utils";
import { RiUserSmileFill } from "@remixicon/react";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const ProfileVariants = cva(
  `
    shrink-0 overflow-hidden cursor-pointer
    `,
  {
    variants: {
      variant: {
        default: "rounded-full",
        md: "rounded-md",
        lg: "rounded-lg",
        sm: "rounded",
      },
      size: {
        default: "w-[5rem] h-[5rem]",
        sm: "w-[2rem] h-[2rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ProfileProps extends VariantProps<typeof ProfileVariants> {
  user: { name: string; image?: string };
  className?: string;
  color?: string;
}

const Profile = ({
  user,
  color = "lightgray",
  className,
  variant,
  size,
}: ProfileProps) => {
  return (
    <div className={cn(ProfileVariants({ variant, size }))}>
      {user.image ? (
        <Image src={user.image} width={500} height={500} alt="user image" />
      ) : (
        <RiUserSmileFill color={color} className="w-full h-full" />
      )}
    </div>
  );
};

export default Profile;
