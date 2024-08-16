import { useState } from "react";
import { createPortal } from "react-dom";
import { FiSun, FiMoon, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function AdminNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleClick = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  return (
    <div className="border-border-light dark:border-primary-dark col-span-2 flex w-full items-center justify-between border-b bg-white/10 p-4 backdrop-blur-md dark:bg-black/30">
      <p className="text-text-light dark:text-text-dark  text-lg lg:text-3xl font-black tracking-wide">
        Styx Dashboard
      </p>

      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-3 space-x-2">
          {/* {isDarkMode ? (
            <FiSun
              className="text-text-light dark:text-text-dark h-5 w-5 cursor-pointer sm:h-6 sm:w-6 md:h-7 md:w-7"
              onClick={() => handleDarkModeClick()}
            />
          ) : (
            <FiMoon
              className="text-text-light h-5 w-5 cursor-pointer dark:text-white sm:h-6 sm:w-6 md:h-7 md:w-7"
              onClick={() => handleDarkModeClick()}
            />
          )} */}
          <h1 className="hidden lg:block text-text-light text-lg font-semibold dark:text-white sm:text-xl md:text-2xl">
            Hi, Styx!
          </h1>
        </div>

        <div className="relative">
          <div
            onClick={() => handleClick()}
            className="flex cursor-pointer items-center space-x-2"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4D0BAQHaJsMqEzK4Bg/company-logo_200_200/company-logo_200_200/0/1700809658927/getstyx_logo?e=1731542400&v=beta&t=FvgiqnSB9hKjCnwZdSFl8mkO0KNHiUHd2Qv1i-w9u9o"
              className="h-8 w-8 rounded-full sm:h-10 sm:w-10 md:h-12 md:w-12"
              alt="Profile"
            />
            <RiArrowDropDownLine
              className={`text-text-light h-8 w-8 transition duration-150 dark:text-white sm:h-10 sm:w-10 md:h-12 md:w-12 ${isDropDownVisible && "rotate-180"}`}
            />
          </div>

          {isDropDownVisible &&
            createPortal(
              <div className="absolute right-6 top-20 mt-2 w-48 rounded-md bg-white/10 backdrop-blur-md dark:bg-gray-800">
                <div className="py-1">
                  <a
                    href="#"
                    className="text-text-light flex items-center px-4 py-2 text-sm hover:bg-purple-400/10 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <FiSettings className="mr-3 h-5 w-5" />
                    Settings
                  </a>
                  <a
                    href="#"
                    className="text-text-light dark:text-text-dark flex items-center px-4 py-2 text-sm hover:bg-purple-400/10 dark:hover:bg-gray-700"
                  >
                    <FiUser className="mr-3 h-5 w-5" />
                    My Profile
                  </a>

                  <a
                    href="/login"
                    className="text-text-light dark:text-text-dark flex items-center px-4 py-2 text-sm hover:bg-purple-400/10 dark:hover:bg-gray-700"
                  >
                    <FiLogOut className="mr-3 h-5 w-5" />
                    Logout
                  </a>
                </div>
              </div>,
              document.body,
            )}
        </div>
      </div>
    </div>
  );
}
