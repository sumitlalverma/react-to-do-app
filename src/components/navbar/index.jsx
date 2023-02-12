import React, { useEffect, useState } from "react";
import "./navbar.css";

const NavBar = () => {
  const [hour, setHour] = useState(null);

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours(); // getting hours
    setHour(hour);
  }, []);

  return (
    <div className="header-container">
      {hour < 12 ? "Good Morning" : "Good evening"}
    </div>
  );
};

export default NavBar;
