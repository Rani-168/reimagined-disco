export function Profile() {
  const user = localStorage.getItem("user");

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="bg-white p-6 rounded-2xl shadow text-center">
        <div className="text-5xl mb-3">👤</div>
        <h2 className="text-xl font-bold">{user}</h2>
      </div>
    </div>
  );
}
export default Profile;