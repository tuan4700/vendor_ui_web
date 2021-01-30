import { useState } from "react";
import TitleBar from "../components/TitleBar";
import { fakeVendor } from "../fakeData";
import PdfDocument from "../components/PdfDocument";
import Input from "../components/Input";
import VendorDrawer from "../components/VendorDrawer";

const MyVendor = () => {
  const tableHeader = [
    "Select",
    "Name",
    "Current Contracts",
    "Main Contact Person",
    "Official Email",
    "Total Spend",
  ];

  const [openPdf, setOpenPdf] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectVendor, setSelectVendor] = useState(false);

  const handleRowClick = (vendor) => {
    if (vendor !== selectVendor) setSelectVendor(vendor);
    else setOpenDrawer((prev) => !prev);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (vendor) => {
    fakeVendor.splice(
      fakeVendor.findIndex((i) => i === vendor),
      1
    );
    setOpenDrawer(false);
    setSelectVendor([]);
  };

  const handleCheckChange = (e) => {
    const value = e.target.value;

    setSelectedInfo(
      selectedInfo.find((ele) => ele === value)
        ? selectedInfo.filter((ele) => ele !== value)
        : [...selectedInfo, value]
    );
  };

  return (
    <div className="myVendor">
      <div className="myVendor_titleBar">
        <TitleBar
          title="My Vendor"
          exportPdf={() => setOpenPdf(true)}
          addLink="/add-vendor-form"
          search={
            <Input
              id="vendor-name-input"
              name="name"
              handleChange={(e) => handleSearch(e)}
            />
          }
        />
      </div>
      <div className="myVendor_contactTable-container">
        <div className="myVendor_contactTable">
          <table className="myVendor_contactTable-table">
            <thead>
              <tr className="myVendor_contactTable-headLine">
                {tableHeader.map((ele, index) => (
                  <td key={index} className="myVendor_contactTable-headItem">
                    {ele}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="myVendor_contactTable-body">
              {searchTerm !== ""
                ? fakeVendor
                    .filter((ele) => ele.name.includes(searchTerm))
                    .map((ele, index) => (
                      <tr
                        key={index}
                        className={`myVendor_contactTable-row ${
                          index.toString() === selectedInfo ? "selected" : ""
                        }`}
                        onClick={() => handleRowClick(ele)}
                      >
                        <td className="myVendor_contactTable-radio">
                          <input
                            value={index.toString()}
                            id={`type_checkbox_${index}`}
                            name="type_checkbox"
                            type="checkbox"
                            onChange={(e) => handleCheckChange(e)}
                          />
                        </td>
                        <td className="myVendor_contactTable-data">
                          {ele.name}
                        </td>
                        <td className="myVendor_contactTable-data">
                          {ele.currentContact}
                        </td>
                        <td className="myVendor_contactTable-data">
                          {ele.mainContactPerson}
                        </td>
                        <td className="myVendor_contactTable-data">
                          {ele.officialEmail}
                        </td>
                        <td className="myVendor_contactTable-data">
                          {ele.totalSpend}
                        </td>
                      </tr>
                    ))
                : fakeVendor.map((ele, index) => (
                    <tr
                      key={index}
                      className={`myVendor_contactTable-row ${
                        index.toString() === selectedInfo ? "selected" : ""
                      }`}
                      onClick={() => handleRowClick(ele)}
                    >
                      <td className="myVendor_contactTable-radio">
                        <input
                          value={index.toString()}
                          id={`type_checkbox_${index}`}
                          name="type_checkbox"
                          type="checkbox"
                          onChange={(e) => handleCheckChange(e)}
                        />
                      </td>
                      <td className="myVendor_contactTable-data">{ele.name}</td>
                      <td className="myVendor_contactTable-data">
                        {ele.currentContact}
                      </td>
                      <td className="myVendor_contactTable-data">
                        {ele.mainContactPerson}
                      </td>
                      <td className="myVendor_contactTable-data">
                        {ele.officialEmail}
                      </td>
                      <td className="myVendor_contactTable-data">
                        {ele.totalSpend}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`myVendor_exportPdf${openPdf ? " show" : ""}`}>
        <div className="myVendor_exportPdf-modal ">
          <div
            className="myVendor_exportPdf-close"
            onClick={() => setOpenPdf(false)}
          >
            X
          </div>
          <div className="myVendor_exportPdf-pdfViewer">
            <PdfDocument
              vendor
              arrayContract={fakeVendor.filter((ele, index) =>
                selectedInfo.includes(index.toString())
              )}
            />
          </div>
        </div>
      </div>

      <div className={`myVendor_drawer ${openDrawer ? "open" : ""}`}>
        <VendorDrawer
          vendor={selectVendor}
          handleClose={handleDrawerClose}
          handleDelete={() => handleDelete(selectVendor)}
        />
      </div>
    </div>
  );
};

export default MyVendor;
