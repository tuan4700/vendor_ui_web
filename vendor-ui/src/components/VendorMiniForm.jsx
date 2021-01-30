import Icon from "./Icon";

const VendorMiniForm = ({ vendor, onClick, handleAdd }) => {
  return (
    <div className="vendorMiniForm" onClick={onClick}>
      <div className="vendorMiniForm_mainContent">
        <div className="vendorMiniForm_mainContent-info">
          <div className="vendorMiniForm_mainContent-title">
            {(vendor && vendor.name) || ""}
          </div>
          <div className="vendorMiniForm_mainContent-qualified">
            {(vendor && vendor.qualified) || ""}
          </div>
          <div className="vendorMiniForm_mainContent-action">
            <div
              className="vendorMiniForm_mainContent-action_plus"
              onClick={handleAdd}
            >
              <Icon name="plus" />
            </div>
            <div className="vendorMiniForm_mainContent-action_more">
              <Icon name="more" />
            </div>
          </div>
        </div>
      </div>
      <div className="vendorMiniForm_externalInfo">
        <div className="vendorMiniForm_externalInfo-name">
          {(vendor && vendor.mainContactPerson) || ""}
        </div>
        <div className="vendorMiniForm_externalInfo-email">
          {(vendor && vendor.officialEmail) || ""}
        </div>
        <div className="vendorMiniForm_externalInfo-total">
          ${(vendor && vendor.totalSpend) || "0"}
        </div>
      </div>
    </div>
  );
};

export default VendorMiniForm;
