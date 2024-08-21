import { RiUserSmileFill } from "@remixicon/react";

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
        <img src={user.image} alt="user image" className="w-full" />
      ) : (
        <RiUserSmileFill color="lightgray" className="w-full h-full" />
      )}
    </div>
  );
};

export default Profile;
