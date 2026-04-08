import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";
import { useNavigate } from "react-router";

const FriendsPage = () => {
  const navigate = useNavigate();

  const { data: friends, isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  if (isLoading) return <p>Loading friends...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Friends</h1>

      <div className="grid gap-4">
        {friends?.map((friend) => (
          <div
            key={friend._id}
            className="flex items-center justify-between p-4 bg-base-200 rounded-xl hover:bg-base-300 transition"
          >
            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
              <img
                src={friend.profilePic}
                alt={friend.fullName}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h2 className="font-semibold">{friend.fullName}</h2>
                <p className="text-sm opacity-70">
                  {friend.learningLanguage}
                </p>
              </div>
            </div>

            {/* RIGHT SIDE BUTTON */}
            <button
              onClick={() => navigate(`/chat/${friend._id}`)}
              className="btn btn-primary btn-sm"
            >
              Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;