import React, { useState } from "react";
import { Button, CardContent } from "@mui/material";

export default function CardsContent({ title, setSelectedTitle,children }) {
  const [isActive, setIsActive] = useState(false);

  const handleOpenSidebar = () => {
    setSelectedTitle(title);
  };

  const handleCloseSidebar = () => {
    setSelectedTitle(null);
  };

  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <>
          <CardContent>{children}</CardContent>
          <Button onClick={handleOpenSidebar}>Application</Button>
          <Button onClick={() => setIsActive(false)} style={{ marginLeft: "8px" }}>
            Close
          </Button>
        </>
      ) : (
        <>
          <Button onClick={handleOpenSidebar}>Application</Button>
          <Button onClick={() => setIsActive(true)} style={{ marginLeft: "8px" }}>
            Details
          </Button>
        </>
      )}

      {/* ... */}
    </section>
  );
}
