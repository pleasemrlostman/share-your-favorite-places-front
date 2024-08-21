import { RiUserSmileFill } from "@remixicon/react";
import Image from "next/image";

const Profile = ({
  user,
  className,
}: {
  user: { name: string; image: string | null };
  className?: string;
}) => {
  return (
    <div
      className={
        "shrink-0 rounded-full overflow-hidden cursor-pointer" + className
      }
    >
      {user.image ? (
        <Image src={user.image} alt="user image" />
      ) : (
        <RiUserSmileFill color="lightgray" className="w-full h-full" />
      )}
    </div>
  );
};

export default Profile;
