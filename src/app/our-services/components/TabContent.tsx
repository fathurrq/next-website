"use client";
import Hero from "@/components/Hero";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import TabBar from "./TabBar";

export type Tab = {
  key: string;
  label: string;
  icon: string;
  content: React.ReactNode;
  href?: string;
};

import ClassificationTabContent from "@/app/our-services/tabs/Classification";
export default function TabContent() {
  const prevIndex = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs: Tab[] = useMemo(
    () => [
      {
        key: "classification",
        label: "Classification",
        icon: "/icon-service-classification.png",
        content: (
          <ClassificationTabContent
            keyContent={"classification"}
            activeIndex={activeIndex}
            prevIndex={prevIndex}
          />
        ),
      },
      {
        key: "statutory",
        label: "Statutory",
        icon: "/icon-service-statutory.png",
        content: (
          <ClassificationTabContent
            keyContent={"classification"}
            activeIndex={activeIndex}
            prevIndex={prevIndex}
          />
        ),
      },
      {
        key: "marine-services",
        label: "Marine Services",
        icon: "/icon-service-marine-services.png",
        content: (
          <ClassificationTabContent
            keyContent={"classification"}
            activeIndex={activeIndex}
            prevIndex={prevIndex}
          />
        ),
      },
      {
        key: "energy-industry",
        label: "Energy & Industry",
        icon: "/icon-service-energy-industry.png",
        content: (
          <ClassificationTabContent
            keyContent={"classification"}
            activeIndex={activeIndex}
            prevIndex={prevIndex}
          />
        ),
      },
      {
        key: "bki-academy",
        label: "BKI Academy",
        icon: "/icon-service-bki-academy.png",
        content: (
          <ClassificationTabContent
            keyContent={"classification"}
            activeIndex={activeIndex}
            prevIndex={prevIndex}
          />
        ),
        href: "https://www.bki.academy/id",
      },
    ],
    [activeIndex]
  );

  const [active, setActive] = useState(tabs[0].key);

  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      const key = decodeURIComponent(raw || "");
      const idx = tabs.findIndex((t) => t.key === key);
      if (idx >= 0) setActive(tabs[idx].key);
    };

    applyHash(); // initial
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [tabs]);

  useEffect(() => {
    if (active) {
      const index = tabs.findIndex((tab) => tab.key === active);
      setActiveIndex(index);
    }
  }, [active, tabs]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#program") {
      const el = document.getElementById("program");
      if (el) {
        // delay to ensure layout is ready
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, []);

  const setActiveWithHash = useCallback(
    (key: string) => {
      prevIndex.current = activeIndex; // keep your direction logic
      setActive(key);
      if (typeof window !== "undefined") {
        // don't jump the page, just replace the hash
        window.history.replaceState(null, "", `#${encodeURIComponent(key)}`);
      }
    },
    [activeIndex]
  );
  return (
    <React.Fragment>
      <Hero
        routes={[{ text: "Home", href: "/" }, { text: "Services" }]}
        backgroundClass="bg-[url('/our-services-bg.jpg')]"
        title={"Our Services"}
        description={
          "Partner with BKI for world-class marine classification services."
        }
        innerComponent={
          <TabBar tabs={tabs} active={active} setActive={setActiveWithHash} />
        }
      />

      {/*Tab Content Section*/}
      {tabs[activeIndex].content}
    </React.Fragment>
  );
}
