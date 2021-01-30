import Input from "../components/Input";
import Radio from "../components/Radio";
import Button from "../components/Button";
import Select from "../components/Select";
import DatePicker from "../components/DatePicker";
import { useState } from "react";
import { fakeContract } from "../fakeData";

const vendorOptions = [
  { value: "vendor", label: "Vendor" },
  { value: "vvendor", label: "VVendor" },
];

const contractNumberOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
];

const contractProductOptions = [
  { value: "vietnam", label: "Vietnam" },
  { value: "usa", label: "USA" },
];

const contractCategoryOptions = [
  { value: "land", label: "Land" },
  { value: "gold", label: "Gold" },
];

const contractAmountOptions = [
  { value: 10000, label: "10,000" },
  { value: 2000000, label: "2,000,000" },
];

const AddContractForm = () => {
  const [formData, setFormData] = useState({
    contractNumber: "4",
    contractMemberCorrect: "wwhuttt",
    product: "haaaaa",
    title: "That's right",
    contract: "huh",
    vendor: "me",
    type: "ohh",
  });

  const [selectedType, setSelectedType] = useState("new");

  const handleTextChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fakeContract.push({ ...formData, type: selectedType });
    alert("Add success!!");
  };

  const handleNewDate = (newDate, property) => {
    setFormData({
      ...formData,
      [property]: newDate,
    });
  };

  return (
    <div className="addContractForm">
      <div className="addContractForm_title">Add Contract</div>
      <div className="addContractForm_form">
        <div className="addContractForm_form-content">
          <div className="addContractForm_form-left">
            <div className="addContractForm_form-radio">
              <div className="addContractForm_form-radio_title">Contract</div>
              <div className="addContractForm_form-radio_container">
                <Radio
                  value="new"
                  id={`type_radio_new`}
                  checked={selectedType === "new"}
                  name="type_radio"
                  type="radio"
                  label="New"
                  handleChange={(e) => setSelectedType(e.target.value)}
                />
                <Radio
                  value="renewal"
                  label="Renewal"
                  id={`type_radio_renewal`}
                  checked={selectedType === "renewal"}
                  name="type_radio"
                  type="radio"
                  handleChange={(e) => setSelectedType(e.target.value)}
                />
              </div>
            </div>
            <div className="addContractForm_form-input">
              <Select
                id="contract-vendor-select"
                name="vendor"
                isRequired
                label="Vendor"
                options={vendorOptions}
                getValue={(selectedOption) =>
                  setFormData({
                    ...formData,
                    vendor: selectedOption.value,
                  })
                }
              />
            </div>
            <div className="addContractForm_form-input">
              <Select
                id="contract-number-select"
                name="contractNumber"
                isRequired
                label="Contract Number"
                options={contractNumberOptions}
                getValue={(selectedOption) =>
                  setFormData({
                    ...formData,
                    contractNumber: selectedOption.value,
                  })
                }
              />
            </div>
            <div className="addContractForm_form-input">
              <Input
                id="contract-title-input"
                name="contractTitle"
                isRequired
                label="Contract Title"
                handleChange={handleTextChange}
              />
            </div>
            <div className="addContractForm_form-input">
              <Select
                id="contract-category-select"
                name="contractCategory"
                isRequired
                label="Category"
                options={contractCategoryOptions}
                getValue={(selectedOption) =>
                  setFormData({
                    ...formData,
                    contractCategory: selectedOption.value,
                  })
                }
              />
            </div>
            <div className="addContractForm_form-input">
              <Select
                id="contract-product-select"
                name="contractProduct"
                isRequired
                label="Product(s)"
                options={contractProductOptions}
                getValue={(selectedOption) =>
                  setFormData({
                    ...formData,
                    contractProduct: selectedOption.value,
                  })
                }
              />
            </div>
            <div className="addContractForm_form-input">
              <Select
                id="contract-amount-select"
                name="contractAmount"
                isRequired
                label="Contract Amount"
                options={contractAmountOptions}
                getValue={(selectedOption) =>
                  setFormData({
                    ...formData,
                    contractAmount: selectedOption.value,
                  })
                }
              />
            </div>
            <div className="addContractForm_form-input">
              <Input
                id="contract-description-input"
                name="description"
                isRequired
                label={"Description"}
                handleChange={handleTextChange}
              />
            </div>
          </div>
          <div className="addContractForm_form-right">
            <div className="addContractForm_form-section">
              Tenure of Contract
            </div>
            <div className="addContractForm_form-input">
              <DatePicker
                id="contract-startDate-input"
                name="startDate"
                isRequired
                label="Start Date"
                value={formData.startDate || new Date()}
                handleChange={(newDate) => handleNewDate(newDate, "startDate")}
              />
            </div>
            <div className="addContractForm_form-input">
              <DatePicker
                id="contract-endDate-input"
                name="endDate"
                isRequired
                label="End Date"
                value={formData.endDate || new Date()}
                handleChange={(newDate) => handleNewDate(newDate, "endDate")}
              />
            </div>
            <div className="addContractForm_form-input">
              <Input
                id="contract-file-input"
                name="contractFile"
                isRequired
                label="Contract File"
                handleChange={handleTextChange}
              />
            </div>
          </div>
        </div>
        <div className="addContractForm_form-actions">
          <div className="addContractForm_form-actionBtn">
            <Button variant="primary" handleClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <div className="addContractForm_form-actionBtn">
            <Button>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContractForm;
