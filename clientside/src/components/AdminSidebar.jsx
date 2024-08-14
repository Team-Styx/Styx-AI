import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUsers, FiMessageSquare } from "react-icons/fi";
import { LiaLightbulbSolid } from "react-icons/lia";
import { MdEventNote, MdOutlineShield } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";

export default function Sidebar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();

  const sidebarItems = [
    { icon: FiHome, text: "Home", path: "/dashboard" },
    { icon: LiaLightbulbSolid, text: "Solution", path: "/dashboard/solutions" },
    { icon: FiUsers, text: "Host", path: "/dashboard/host" },
    { icon: MdEventNote, text: "Tickets", path: "/dashboard/tickets" },
    { icon: FiMessageSquare, text: "Feedbacks", path: "/dashboard/feedback" },
    {
      icon: HiOutlineLightBulb,
      text: "Solution Run",
      path: "/dashboard/solution-run",
    },
    {
      icon: RiEmotionHappyLine,
      text: "Emotional Status",
      path: "/dashboard/emotional-status",
    },
    {
      icon: MdOutlineShield,
      text: "Compliance Hardening",
      path: "/dashboard/compliance-hardening",
    },
    { icon: BiStats, text: "Reports", path: "/dashboard/reports" },
  ];

  return (
    <div className="ml-6 mt-6 w-24 min-h-screen place-self-start rounded-xl border border-border-light bg-white/10 p-3 dark:border-primary-dark dark:bg-black/30 dark:text-text-dark">
      {sidebarItems.map((item, index) => {
        const isSelected = location.pathname === item.path;
        return (
          <Link
            key={index}
            to={item.path}
            className={`relative flex items-center rounded-xl px-4 py-3 ${
              isSelected ? "bg-black/10 dark:bg-white/20" : ""
            } transition-colors duration-300 hover:bg-black/10 dark:hover:bg-white/20`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <item.icon className="h-auto w-6 text-text-light dark:text-text-dark" />
            {hoveredIndex === index && (
              <span className="absolute left-full z-50 ml-2 whitespace-nowrap rounded-md bg-border-light px-2 py-1 text-sm text-text-light dark:bg-primary-dark dark:text-text-dark">
                {item.text}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
