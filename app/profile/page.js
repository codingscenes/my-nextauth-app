import Image from "next/image";
const users = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
];

const Profile = () => {
  return (
    <div className="flex justify-center align-middle flex-col items-center">
      {users.map((user, index) => (
        <div key={index} className="bg-gray-200 flex  shadow-md w-6/12 p-4 rounded-lg mt-10 ">
          <div className="flex-shrink-0">
            <Image
              priority
              width={400}
              height={400}
              src={user.avatar}
              alt="Avatar"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p>{user.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
