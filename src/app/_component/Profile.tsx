import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

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
        <img src={user.image} alt="user image" />
      ) : (
        <FontAwesomeIcon icon={faCircleUser} className="w-full h-full" />
      )}
    </div>
  );
};

export default Profile;
