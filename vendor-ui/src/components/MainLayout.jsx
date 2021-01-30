import { useState } from "react";
import Appbar from "./Appbar";
import Drawer from "./Drawer";

const MainLayout = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <div className="mainLayout">
      <div className="mainLayout_drawer">
        <Drawer
          open={openDrawer}
          handleCloseDrawer={() => setOpenDrawer(false)}
        />
      </div>
      <div className="mainLayout_content">
        <div className="mainLayout_appbar">
          <Appbar handleOpenDrawer={handleOpenDrawer} />
        </div>
        <div className="mainLayout_main">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
