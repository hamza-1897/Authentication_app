import { Suspense } from "react";

async function ProfileDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <p className="text-sm text-gray-500 mt-2">
      Welcome to your profile page. ID: {resolvedParams.id}
    </p>
  );
}

export default function ProfilePageID({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl backdrop-blur-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Profile</h1>
          <Suspense fallback={<p className="text-sm text-gray-400 mt-2">Loading profile...</p>}>
            <ProfileDetails params={params} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}