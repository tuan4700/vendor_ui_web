import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../components/Icon";

const Drawer = ({ open, handleCloseDrawer }) => {
  const location = useLocation();

  const [accordionVar, setAccordionVar] = useState({
    vendor: false,
    contract: false,
    rating: false,
  });

  const handleAccordion = (name) => {
    setAccordionVar({
      ...accordionVar,
      [name]: !accordionVar[name],
    });
  };

  const handleCheckActive = (link) => {
    if (link === location.pathname) return true;
    else return false;
  };

  return (
    <div className={`drawer ${open ? "show" : ""}`}>
      <div className="drawer_brand">Vendor </div>
      <div className="drawer_menu" onClick={handleCloseDrawer}>
        <Icon name="menu" />
      </div>
      <div className="drawer_accordion">
        <div
          className={`drawer_accordion-item ${
            accordionVar.vendor ? "active" : ""
          }`}
        >
          <div
            className="drawer_accordion-title "
            onClick={() => handleAccordion("vendor")}
          >
            <Icon name="vendor" /> Vendors
          </div>
          <div
            className="drawer_accordion-childWrapper "
            onClick={handleCloseDrawer}
          >
            <Link
              to="/vendor-recommend"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/vendor-recommend") ? "active" : ""
              }`}
            >
              <Icon name="vendorRecommend" /> Recommend
            </Link>
            <Link
              to="/add-vendor-form"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/add-vendor-form") ? "active" : ""
              }`}
            >
              <Icon name="vendorAdd" /> Add Vendor
            </Link>
            <Link
              to="/my-vendor"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/my-vendor") ? "active" : ""
              }`}
            >
              <Icon name="myVendor" /> My Vendor
            </Link>
            <Link
              to="/vendor-send-report"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/vendor-send-report") ? "active" : ""
              }`}
            >
              <Icon name="vendorReport" />
              Vendor Send Report
            </Link>
          </div>
        </div>
        <div
          className={`drawer_accordion-item ${
            accordionVar.contract ? "active" : ""
          }`}
        >
          <div
            className="drawer_accordion-title "
            onClick={() => handleAccordion("contract")}
          >
            <Icon name="contract" /> Contracts
          </div>
          <div
            className="drawer_accordion-childWrapper "
            onClick={handleCloseDrawer}
          >
            <Link
              to="/add-contact-form"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/add-contact-form") ? "active" : ""
              }`}
            >
              <Icon name="contractAdd" /> Add Contract
            </Link>
            <Link
              to="/my-contact"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/my-contact") ? "active" : ""
              }`}
            >
              <Icon name="myContract" /> My Contract
            </Link>
            <Link
              to="/edit-history"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/edit-history") ? "active" : ""
              }`}
            >
              <Icon name="editHistory" /> Edit History
            </Link>
          </div>
        </div>
        <div
          className={`drawer_accordion-item ${
            accordionVar.rating ? "active" : ""
          }`}
        >
          <div
            className="drawer_accordion-title"
            onClick={() => handleAccordion("rating")}
          >
            <Icon name="vendorRating" /> Vendor Rating
          </div>
          <div
            className="drawer_accordion-childWrapper "
            onClick={handleCloseDrawer}
          >
            <Link
              to="/rate-your-vendor"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/rate-your-vendor") ? "active" : ""
              }`}
            >
              <Icon name="rateVendor" /> Rate Your Vendor
            </Link>
            <Link
              to="/vendor-review"
              className={`drawer_accordion-navigate ${
                handleCheckActive("/vendor-review") ? "active" : ""
              }`}
            >
              <Icon name="vendorReview" /> Vendor Review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
