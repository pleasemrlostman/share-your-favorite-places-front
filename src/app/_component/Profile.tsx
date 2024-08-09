import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
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
        <FontAwesomeIcon
          icon={faCircleUser}
          className="w-full h-full text-gray-500"
        />
      )}
    </div>
  );
};

export default Profile;
