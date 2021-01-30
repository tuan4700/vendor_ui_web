import { useState } from "react";
import TitleBar from "../components/TitleBar";
import VendorDrawer from "../components/VendorDrawer";
import VendorMiniForm from "../components/VendorMiniForm";
import { fakeRecommendVendor, fakeVendor } from "../fakeData";
import Input from "../components/Input";

const RecommendVendor = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectVendor, setSelectVendor] = useState(false);
  const [searchTerm, setSearchTerm] = useState([]);

  const handleMiniFormClick = (vendor) => {
    if (vendor !== selectVendor) setSelectVendor(vendor);
    else setOpenDrawer((prev) => !prev);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(
      fakeRecommendVendor.filter((ele) => {
        return ele.name === e.target.value;
      })
    );
  };

  const handleAddVendor = (ele) => {
    fakeVendor.push(ele);
    alert("Add success!!!");
  };

  return (
    <div className="recommendVendor">
      <div className={`recommendVendor_drawer ${openDrawer ? "open" : ""}`}>
        <VendorDrawer vendor={selectVendor} handleClose={handleDrawerClose} />
      </div>
      <div className="recommendVendor_titleBar">
        <TitleBar
          title="Recommend Vendor"
          search={
            <Input
              id="vendor-name-input"
              name="name"
              handleChange={(e) => handleSearch(e)}
            />
          }
        />
      </div>
      <div
        className={`recommendVendor_contentContainer  ${
          openDrawer ? "drawer-open" : ""
        }`}
      >
        {searchTerm.length > 0
          ? searchTerm.map((ele, index) => (
              <VendorMiniForm
                vendor={ele}
                key={index}
                onClick={() => handleMiniFormClick(ele)}
                handleAdd={() => handleAddVendor(ele)}
              />
            ))
          : fakeRecommendVendor.map((ele, index) => (
              <VendorMiniForm
                vendor={ele}
                key={index}
                onClick={() => handleMiniFormClick(ele)}
                handleAdd={() => handleAddVendor(ele)}
              />
            ))}
      </div>
    </div>
  );
};

export default RecommendVendor;
