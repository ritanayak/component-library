import type { UserProfileCardProps } from "../../types";

function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <section className="flex flex-col items-center mt-20 bg-gray-50 w-full max-w-md m-auto p-8 rounded-lg shadow-md">

      <div className="flex items-center gap-10">
        {/* Avatar rendered only if provided */}
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover"
          />
        )}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">{user.name}</p>
          {showEmail && (<p className="text-md text-gray-500">{user.email}</p>)}
          {showRole && (<p className="text-md text-gray-500">{user.role}</p>)}
        </div>
      </div>

      {children && <div className="mt-4">{children}</div>}

    {/* Render edit button only if callback exists */}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2"
        >
          Edit Profile
        </button>
      )}
    </section>
  );
}

export default UserProfileCard;
