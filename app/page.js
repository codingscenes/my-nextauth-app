import submitData from "@/actions/submit-data";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();

  // console.log(userId);
  // console.log(user);
  return (
    <main>
      <div className="px-4 py-8">
        <h1 className="text-3xl font-bold">Welcome to My Next App!</h1>
        <p className="text-gray-600">This is some fancy content for the Home component.</p>

        <form action={submitData}>
          <input
            type="text"
            name="username"
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
