
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    streetAddress: "",
    postalCode: "",
    city: "",
    country: "",
    imageUrl: "",
    admin: false,
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const initialUser = {
      name: "Balu Pal",
      email: "balu@example.com",
      phone: "9876543210",
      streetAddress: "123 React Street",
      postalCode: "400001",
      city: "Mumbai",
      country: "India",
      imageUrl: "",
      admin: true,
    };
    setUser(initialUser);
  }, []);

  function updateUser(prop, value) {
    setUser((prev) => ({ ...prev, [prop]: value }));
  }

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);

      try {
        // const res = await fetch("/api/upload", {
        //   method: "POST",
        //   body: data,
        // });
        // const result = await res.json();
        // updateUser("imageUrl", result?.imageUrl || "");
        toast.success("Image updated");
      } catch (err) {
        toast.error("Upload failed");
      }
    }
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    console.log("Saving user data:", user);
    toast.success("Profile saved!");
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 min-h-[80vh]">
      <div className="flex flex-col md:flex-row gap-6 text-black">
        {/* Avatar Section */}
        <div className="md:w-1/4 flex flex-col items-center">
          <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500">No image</span>
            )}
          </div>
          <label className="mt-2 w-full">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
               Change image
             </span>
          </label>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:w-3/4 w-full flex flex-col gap-4"
        >
          <div>
            <label className="text-sm font-medium">First and last name</label>
            <input
              type="text"
              className="w-full rounded-md p-2 border border-gray-300 bg-gray-100"
              value={user.name}
              onChange={(ev) => updateUser("name", ev.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              disabled
              className="w-full rounded-md p-2 border border-gray-300 bg-gray-100"
              value={user.email}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              type="tel"
              disabled={disabled}
              className="w-full rounded-md p-2 border border-gray-300 bg-gray-100"
              value={user.phone}
              onChange={(ev) => updateUser("phone", ev.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Street address</label>
            <input
              type="text"
              disabled={disabled}
              className="w-full rounded-md p-2 border border-gray-300 bg-gray-100"
              value={user.streetAddress}
              onChange={(ev) => updateUser("streetAddress", ev.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Postal code</label>
              <input
                type="text"
                disabled={disabled}
                className="w-full rounded-md p-2 border border-gray-300 bg-gray-100"
                value={user.postalCode}
                onChange={(ev) => updateUser("postalCode", ev.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">City</label>
              <input
                type="text"
                disabled={disabled}
                className="w-full rounded-md p-2 border border-gray-300 bg-gray-100"
                value={user.city}
                onChange={(ev) => updateUser("city", ev.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Country</label>
            <input
              type="text"
              disabled={disabled}
              className="w-full rounded-md p-2 border border-gray-300 bg-gray-100"
              value={user.country}
              onChange={(ev) => updateUser("country", ev.target.value)}
            />
          </div>

          {user.admin && (
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={user.admin}
                onChange={(ev) => updateUser("admin", ev.target.checked)}
              />
              <span className="text-sm">Admin</span>
            </label>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-4 rounded-md mt-2 self-start"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
