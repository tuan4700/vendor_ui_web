import Input from "../components/Input";
import DatePicker from "../components/DatePicker";
import Button from "../components/Button";
import Select from "../components/Select";
import { useState } from "react";
import { fakeVendor } from "../fakeData";

const typeOptions = [
  { value: "vendor", label: "Vendor" },
  { value: "vvendor", label: "VVendor" },
];

const countryOptions = [
  { value: "vietnam", label: "Vietnam" },
  { value: "usa", label: "USA" },
];
const internalOptions = [
  { value: "unknown", label: "Unknown" },
  { value: "me", label: "Me" },
];

const AddVendorForm = () => {
  const [formData, setFormData] = useState({
    name: "Me",
    type: "vendor",
    totalSpend: 1000,
    status: "active",
    countryOfRegistration: "Vietnam",
    companyRegistrationNumber: "84",
    qualified: "Yes",
    companyWebsite: "haha.com",
    internalRepresentative: "unknown",
    currentContact: "Myself",
    mainContact: "Myself",
    officialEmail: "a@gmail.com",
    secondaryEmail: "1@gmail.com",
    mobileNumber: "123456789",
  });

  const handleTextChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fakeVendor.push(formData);
    alert("Add success!!");
  };

  const handleNewDate = (newDate, property) => {
    setFormData({
      ...formData,
      [property]: newDate,
    });
  };

  return (
    <div className="addVendorForm">
      <div className="addVendorForm_title">Add Vendor</div>
      <div className="addVendorForm_form">
        <div className="addVendorForm_form-content">
          <div className="addVendorForm_form-left">
            <div className="addVendorForm_form-input">
              <Input
                id="vendor-name-input"
                name="name"
                isRequired
                label={"Name"}
                handleChange={handleTextChange}
              />
            </div>
            <div className="addVendorForm_form-input">
              <Select
                id="vendor-type-select"
                name="vendor-type-select"
                isRequired
                label={"Type"}
                options={typeOptions}
              />
            </div>
            <div className="addVendorForm_form-input">
              <Select
                id="vendor-country-select"
                name="countryOfRegistration"
                isRequired
                label="Country of Registration"
                options={countryOptions}
              />
            </div>
            <div className="addVendorForm_form-input">
              <Input
                id="vendor-companynumber-input"
                name="companyRegistrationNumber"
                isRequired
                label={"Company Registration Number"}
                handleChange={handleTextChange}
              />
            </div>
            <div className="addVendorForm_form-input">
              <Input
                id="vendor-stocksymbol-input"
                name="stockSymbol"
                isRequired
                label={"Stock Symbol"}
                handleChange={handleTextChange}
              />
            </div>
            <div className="addVendorForm_form-input">
              <Input
                id="vendor-companywebsite-input"
                name="companyWebsite"
                isRequired
                label={"Company Website"}
                placeholder={"https://"}
                handleChange={handleTextChange}
              />
            </div>
            <div className="addVendorForm_form-input">
              <Input
                id="vendor-dealwith-input"
                name="dealWith"
                isRequired
                label={"Deal with"}
                handleChange={handleTextChange}
              />
            </div>
          </div>
          <div className="addVendorForm_form-right">
            <div className="addVendorForm_form-input">
              <Select
                id="vendor-internal-select"
                name="internalRepresentative"
                isRequired
                label="Internal Representative"
                options={internalOptions}
              />
            </div>
            <div className="addVendorForm_form-input">
              <DatePicker
                id="vendor-relationship-input"
                name="relationshipSince"
                isRequired
                label={"Relationship Since"}
                value={formData.relationshipSince || new Date()}
                handleChange={(newDate) =>
                  handleNewDate(newDate, "relationshipSince")
                }
              />
            </div>
            <div className="addVendorForm_form-section">
              Contact Information
            </div>
            <div className="addVendorForm_form-input">
              <Input
                id="vendor-main-contact-input"
                name="mainContactPerson"
                isRequired
                label={"Main Contact Person"}
                handleChange={handleTextChange}
              />
            </div>
            <div className="addVendorForm_form-input">
              <Input
                id="vendor-oemail-input"
                name="officialEmail"
                isRequired
                label={"Official Email"}
                handleChange={handleTextChange}
              />
            </div>
            <div className="addVendorForm_form-input">
              <Input
                id="vendor-semail-input"
                name="secondaryEmail"
                isRequired
                label={"Secondary Email"}
                handleChange={handleTextChange}
              />
            </div>
            <div className="addVendorForm_form-input">
              <Input
                id="vendor-mobile-input"
                name="mobileNumber"
                isRequired
                label={"Mobile Number"}
                handleChange={handleTextChange}
              />
            </div>
          </div>
        </div>
        <div className="addVendorForm_form-actions">
          <div className="addVendorForm_form-actionBtn">
            <Button variant="primary" handleClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <div className="addVendorForm_form-actionBtn">
            <Button>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVendorForm;
