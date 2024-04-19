"use client";
import { useState } from "react";

function Skills({ data }: any) {
  const [activeTab, setActiveTab] = useState("currentSkills");

  const setBg = (tab: any) =>
    activeTab === tab ? "bg-yellow-400" : "bg-gray-200";
  const setTabsAlignment = (tab: any) =>
    tab === "currentSkills" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex">
      {["currentSkills", "learningSkills"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab === "currentSkills" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map(({ icon, text }: any) => (
        <li key={text}>
          <span> {icon}</span> {text}
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      {tabs}
      {content}
    </div>
  );
}

export default Skills;
