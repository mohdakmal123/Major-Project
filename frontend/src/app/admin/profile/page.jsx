"use client";
import React, { useState, useRef } from "react";

// Single-file Admin Profile component (JSX + Tailwind)
// If you're using Next.js App Router, add "use client" at the top of this file.

export default function AdminProfile() {
  const initialUser = {
   
    avatar: "",
    name: "Mohd Akmal",
    email: "akmal.ahmad1209@gmail.com",
    role: "Administrator",
    phone: "+91 9834041983",
    location: "Lucknow, India",
    bio: "Full-stack developer — building TemplateWave and admin dashboards.",
    permissions: {
      users: true,
      templates: true,
      orders: true,
      settings: true,
    },
    stats: {
      templatesSold: 124,
      activeUsers: 3420,
      revenue: "₹1,24,500",
    },
  };

  const [user, setUser] = useState(initialUser);
  const [editMode, setEditMode] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(initialUser.avatar);
  const fileRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((u) => ({ ...u, [name]: value }));
  }

  function handlePermissionToggle(key) {
    setUser((u) => ({
      ...u,
      permissions: { ...u.permissions, [key]: !u.permissions[key] },
    }));
  }

  function handleImage(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarPreview(reader.result);
      setUser((u) => ({ ...u, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  }

  function handleSave() {
    // replace with API call
    console.log("Saving user:", user);
    setEditMode(false);
    alert("Profile saved (mock). Replace with real API request.");
  }

  function handleCancel() {
    setUser(initialUser);
    setAvatarPreview(initialUser.avatar);
    setEditMode(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-start justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Left column - avatar + stats */}
          <div className="md:w-1/3 p-6 bg-gradient-to-b from-indigo-600 to-indigo-400 text-white">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-indigo-300 flex items-center justify-center text-3xl font-bold">
                    {user.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
                  </div>
                )}
              </div>

              <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
              <p className="text-sm opacity-90">{user.role}</p>

              <div className="mt-6 w-full">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-xs uppercase opacity-80">Sold</div>
                    <div className="text-lg font-semibold">{user.stats.templatesSold}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase opacity-80">Users</div>
                    <div className="text-lg font-semibold">{user.stats.activeUsers}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase opacity-80">Revenue</div>
                    <div className="text-lg font-semibold">{user.stats.revenue}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full">
                <button
                  onClick={() => fileRef.current && fileRef.current.click()}
                  className="mb-3 w-full bg-white/20 hover:bg-white/30 rounded-md py-2 text-sm"
                >
                  Upload Avatar
                </button>
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImage} />
                <button
                  onClick={() => setEditMode((s) => !s)}
                  className="w-full bg-white/20 hover:bg-white/30 rounded-md py-2 text-sm"
                >
                  {editMode ? "View" : "Edit Profile"}
                </button>
              </div>
            </div>
          </div>

          {/* Right column - form */}
          <div className="md:w-2/3 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Admin Profile</h3>
              <div className="text-sm text-gray-500"></div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-medium text-gray-600">Full Name</label>
              <input
                name="name"
                value={user.name}
                onChange={handleChange}
                disabled={!editMode}
                className={`mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 ${editMode ? "bg-white" : "bg-gray-50"}`}
              />

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600">Email</label>
                  <input
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    disabled={!editMode}
                    className={`mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 ${editMode ? "bg-white" : "bg-gray-50"}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600">Phone</label>
                  <input
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    disabled={!editMode}
                    className={`mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 ${editMode ? "bg-white" : "bg-gray-50"}`}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-medium text-gray-600">Location</label>
                <input
                  name="location"
                  value={user.location}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 ${editMode ? "bg-white" : "bg-gray-50"}`}
                />
              </div>

              <div className="mt-4">
                <label className="block text-xs font-medium text-gray-600">Bio</label>
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleChange}
                  disabled={!editMode}
                  rows={4}
                  className={`mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 ${editMode ? "bg-white" : "bg-gray-50"}`}
                />
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium">Permissions</h4>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.keys(user.permissions).map((key) => (
                    <label key={key} className={`flex items-center gap-2 p-2 rounded-md border ${editMode ? "cursor-pointer hover:bg-gray-50" : "opacity-80"}`}>
                      <input
                        type="checkbox"
                        checked={user.permissions[key]}
                        disabled={!editMode}
                        onChange={() => handlePermissionToggle(key)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm capitalize">{key}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {editMode ? (
                  <>
                    <button onClick={handleSave} className="px-4 py-2 rounded-md bg-indigo-600 text-white">Save</button>
                    <button onClick={handleCancel} className="px-4 py-2 rounded-md border">Cancel</button>
                  </>
                ) : (
                  <button onClick={() => setEditMode(true)} className="px-4 py-2 rounded-md border">Enable Edit</button>
                )}

                <button
                  onClick={() => alert('Open change-password modal (mock)')}
                  className="ml-auto px-4 py-2 rounded-md bg-gray-100"
                >
                  Change Password
                </button>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="text-xs text-gray-500">Last Login</div>
                  <div className="mt-1 font-semibold">Sept 20, 2025 • 12:00 PM</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="text-xs text-gray-500">Two‑Factor</div>
                  <div className="mt-1 font-semibold">Enabled</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                  <div className="text-xs text-gray-500">API Access</div>
                  <div className="mt-1 font-semibold">Active</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-400">Tip: Connect this form to your backend API to persist changes. This component is intentionally self-contained for quick prototyping.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
