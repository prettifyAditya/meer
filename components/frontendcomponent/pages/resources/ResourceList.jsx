"use client";
import { useState } from "react";
import TabRow from "../../molecules/TabRow";
import ResourceCard from "../../molecules/ResourceCard";
import Image from "next/image";

const ResourceList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Newest");

  return (
    <section className="resourceList">
      <div className="container">
        <TabRow
          className="full"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          data={data}
        />

        <div className="filter">
          <h4>{data?.length} Results Found</h4>
          <div className="right">
            <label className="search">
              <Image
                className="icon"
                src="/icon/search.svg"
                alt="icon"
                width={18}
                height={18}
              />
              <input type="text" placeholder="Search" />
            </label>

            <div onClick={() => setIsOpen(!isOpen)} className="sort">
              <p> {selected || "Sort By"}</p>
              <Image
                className="icon"
                src="/icon/down.svg"
                alt="icon"
                width={20}
                height={8.75}
              />
              <div className={`option-container ${isOpen ? "open" : ""}`}>
                <ul className="options">
                  {["Newest", "Oldest"]?.map((val, i) => {
                    const isSelected = selected == val;
                    return (
                      <li
                        onClick={() => {
                          setIsOpen(false);
                          setSelected(val);
                        }}
                        className={isSelected ? "selected" : ""}
                        key={i}
                      >
                        {val}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {data.map(({ category, list }, idx) => {
          const isActive = activeTab === idx;
          return (
            <div key={idx} className={`content ${isActive ? "active" : ""}`}>
              {list.map((item, i) => {
                return (
                  <ResourceCard
                    className="border"
                    key={i}
                    {...item}
                    category={category}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResourceList;

const data = [
  {
    category: "All",
    list: [
      {
        image: "/image/home/resource/1.png",
        title: "MEERTalk February 2026",
        description: "Goliath’s Curse: Why Societies Collapse",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/2.png",
        title: "MEERTalk Januray 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/3.png",
        title: "Newsletter February 2026",
        description:
          "As 2026 progresses, MEER’s work continues to build momentum..",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/4.png",
        title: "MEERTalk February 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/4.png",
        title: "MEERTalk February 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
    ],
  },
  {
    category: "MEER Talks",
    list: [
      {
        image: "/image/home/resource/1.png",
        title: "MEERTalk February 2026",
        description: "Goliath’s Curse: Why Societies Collapse",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/2.png",
        title: "MEERTalk Januray 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
    ],
  },
  {
    category: "Newsletters",
    list: [
      {
        image: "/image/home/resource/3.png",
        title: "Newsletter February 2026",
        description:
          "As 2026 progresses, MEER’s work continues to build momentum..",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/4.png",
        title: "MEERTalk February 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
    ],
  },
  {
    category: "Podcasts",
    list: [
      {
        image: "/image/home/resource/3.png",
        title: "Newsletter February 2026",
        description:
          "As 2026 progresses, MEER’s work continues to build momentum..",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/4.png",
        title: "MEERTalk February 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/3.png",
        title: "Newsletter February 2026",
        description:
          "As 2026 progresses, MEER’s work continues to build momentum..",
        date: "February 1 2026",
      },
      {
        image: "/image/home/resource/4.png",
        title: "MEERTalk February 2026",
        description: "Carbon Removal Won't Scale in Time",
        date: "February 1 2026",
      },
    ],
  },
];
