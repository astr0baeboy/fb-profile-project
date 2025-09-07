import React from "react";
import "../styles/Tabs.css";

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        className={activeTab === "posts" ? "active" : ""}
        onClick={() => setActiveTab("posts")}
      >
        Posts
      </button>
      <button
        className={activeTab === "about" ? "active" : ""}
        onClick={() => setActiveTab("about")}
      >
        About
      </button>
      <button
        className={activeTab === "friends" ? "active" : ""}
        onClick={() => setActiveTab("friends")}
      >
        Friends
      </button>
      <button
        className={activeTab === "photos" ? "active" : ""}
        onClick={() => setActiveTab("photos")}
      >
        Photos
      </button>
    </div>
  );
}
