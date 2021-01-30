import { Link } from "react-router-dom";
import Button from "./Button";

const VendorDrawer = ({ vendor, handleClose, handleDelete }) => {
  const infoOverview = [
    { title: "Name", value: vendor.name },
    { title: "Type", value: vendor.type },
    { title: "Total spend", value: vendor.totalSpend },
    { title: "Status", value: vendor.status },
    { title: "Country of Registration", value: vendor.countryOfRegistration },
    {
      title: "Company Registration Number",
      value: vendor.companyRegistrationNumber,
    },
    { title: "Stock Symbol", value: vendor.stockSymbol },
    { title: "Company Website", value: vendor.companyWebsite },
    { title: "Relationship Since", value: vendor.relationshipSince },
    { title: "Status", value: vendor.status },
  ];
  const infoContact = [
    { title: "Main Contact Person", value: vendor.mainContactPerson },
    { title: "Official Email", value: vendor.officialEmail },
    { title: "Secondary Email", value: vendor.secondaryEmail },
    { title: "Mobile Number", value: vendor.mobileNumber },
  ];

  return (
    <div className="vendorDrawer">
      <div className="vendorDrawer_actionBar">
        <div className="vendorDrawer_actionBar-actionBtn vendorDrawer_actionBar-archive">
          <Button variant="outlined">Archive</Button>
        </div>
        <div className="vendorDrawer_actionBar-actionBtn vendorDrawer_actionBar-edit">
          <Link to="/add-vendor-form">
            <Button variant="outlined primary">Edit</Button>
          </Link>
        </div>
        <div className="vendorDrawer_actionBar-actionBtn vendorDrawer_actionBar-delete">
          <Button variant="outlined" handleClick={handleDelete}>
            Delete
          </Button>
        </div>
        <div className="vendorDrawer_actionBar-actionBtn vendorDrawer_actionBar-close">
          <Button variant="outlined" handleClick={handleClose}>
            Close
          </Button>
        </div>
      </div>

      <div className="vendorDrawer_section">Overview</div>
      <div className="vendorDrawer_informationTable">
        {infoOverview.map((ele, index) => (
          <div key={index} className="vendorDrawer_informationTable-line">
            <div className="vendorDrawer_informationTable-title">
              {ele.title}
            </div>
            <div className="vendorDrawer_informationTable-value">
              {ele.value}
            </div>
          </div>
        ))}
      </div>

      <div className="vendorDrawer_section">Contact Information</div>
      <div className="vendorDrawer_informationTable">
        {infoContact.map((ele, index) => (
          <div key={index} className="vendorDrawer_informationTable-line">
            <div className="vendorDrawer_informationTable-title">
              {ele.title}
            </div>
            <div className="vendorDrawer_informationTable-value">
              {ele.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorDrawer;
