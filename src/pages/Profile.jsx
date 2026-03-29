function Profile() {
  const user = localStorage.getItem("user");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>

      <div className="bg-white p-4 shadow rounded">
        <p><b>Name:</b> {user}</p>
      </div>
    </div>
  );
}

export default Profile;