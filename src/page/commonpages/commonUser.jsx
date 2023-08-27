import React, { useState } from "react";
import MenuNavBar from "../../component/commonuser/CommonNav";
import CommonComponent from "../../component/commonuser/CommonComponent";
import BackImage from "../../image/_5459e381-01d9-4b36-9a65-c7f5aa7c9b55.jpeg";
export default function CommonPage() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div>
        <MenuNavBar setActive={setActive} />
        <CommonComponent active={active} />
      </div>
    </>
  );
}
