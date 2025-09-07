import React, { useState } from "react";
import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import Tabs from "./components/Tabs";
import Intro from "./components/Intro";
import Post from "./components/Post";
import Friends from "./components/Friends";
import Photos from "./components/Photos";

export default function App() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="app">
      <Header />
      <ProfileHeader />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "posts" && (
       <>
  <Intro />
  <Post 
    user="Niezel Mae Diego" 
    text="Always remember nga ang Ginoo way ihatag nga problema nga di nimo ma solve. Pero imong math teacher, naa..." 
    avatar="images/profile.jpg" 
  />
  <Post 
    user="Niezel Mae Diego" 
    text="Di man ko broken-hearted, gusto lang ko mag drama. Ana lang 😎" 
    avatar="images/profile.jpg" 
  />
</>

      )}

      {activeTab === "about" && (
        <div style={{ padding: "12px", background: "#fff", borderRadius: "8px" }}>
          <h3>About</h3>
          <p><strong>Bio:</strong> Dili man ko tapulan, kapuyon lang ko mag lihok-lihok ✌️</p>
          <p><strong>Location:</strong> I need your location, ASAP</p>
          <p><strong>Joined:</strong> April 2010</p>
        </div>
      )}

      {activeTab === "friends" && <Friends />}
      {activeTab === "photos" && <Photos />}
    </div>
  );
}
