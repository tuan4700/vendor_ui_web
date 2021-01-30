import Input from "../components/Input";
import Radio from "../components/Radio";
import Button from "../components/Button";
import Select from "../components/Select";
import React, { useState, useEffect } from "react";
import { fakeRateVendor, fakeVendor } from "../fakeData";

const handleCamelToCapital = (text) => {
  var result = text.replace(/([A-Z])/g, " $1");
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

const vendorOptions = fakeVendor.map((element) => {
  return {
    value: element.name,
    label: handleCamelToCapital(element.name),
  };
});

const contractOptions = [
  { value: "hehe", label: "Hehe" },
  { value: "hihi", label: "Hihi" },
];

const contractProductOptions = [
  { value: "vietnam", label: "Vietnam" },
  { value: "usa", label: "USA" },
];

const RateYourVendor = () => {
  const [formData, setFormData] = useState({
    name: "1",
    type: "vendor",
    totalSpend: 1000,
    status: "active",
    countryOfRegistration: "Vietnam",
    companyRegistrationNumber: "84",
    qualified: "Yes",
    companyWebsite: "haha.com",
    internalRepresentative: "unknown",
    relationshipSince: "2020",
    currentContact: "Myself",
    mainContactPerson: "Myself",
    officialEmail: "a@gmail.com",
    secondaryEmail: "1@gmail.com",
    mobileNumber: "123456789",
  });

  const [averateRating, setAverateRating] = useState(0);

  const handleTextChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // var foundIndex = fakeVendor.findIndex((x) => x.name === formData.name);
    // fakeRateVendor[foundIndex] = formData;
    fakeRateVendor.push({
      ...formData,
      ratedBy: "Anh Tuan",
      averageRating: averateRating,
    });
    alert("Add success!!");
  };

  const handleRatingSelect = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const findScore = (rating) => {
    switch (rating) {
      case "poor":
        return 0.5;
      case "average":
        return 1;
      case "excellent":
        return 2;
      default:
        return 0;
    }
  };

  useEffect(() => {
    setAverateRating(
      findScore(formData.qualityRating) +
        findScore(formData.deliveryRating) +
        findScore(formData.priceRating) +
        findScore(formData.serviceRating) +
        findScore(formData.riskRating)
    );
  }, [
    formData.qualityRating,
    formData.deliveryRating,
    formData.priceRating,
    formData.serviceRating,
    formData.riskRating,
  ]);

  return (
    <div className="rateYourVendor">
      <div className="rateYourVendor_title">Rate Your Vendor</div>
      <div className="rateYourVendor_form">
        <div className="rateYourVendor_form-content">
          <div className="rateYourVendor_form-input">
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
          <div className="rateYourVendor_form-input">
            <Select
              id="contract-contract-select"
              name="contract"
              isRequired
              label="Contract"
              options={contractOptions}
              getValue={(selectedOption) =>
                setFormData({
                  ...formData,
                  contract: selectedOption.value,
                })
              }
            />
          </div>
          <div className="rateYourVendor_form-input">
            <Select
              id="contract-productService-select"
              name="productService"
              isRequired
              label="Product/Service"
              options={contractProductOptions}
              getValue={(selectedOption) =>
                setFormData({
                  ...formData,
                  productService: selectedOption.value,
                })
              }
            />
          </div>
          <div className="rateYourVendor_form-radio">
            <div className="rateYourVendor_form-radio_title">Quality</div>
            <div className="rateYourVendor_form-radio_container">
              <Radio
                value="poor"
                id={`qualityRating_poor`}
                checked={formData.qualityRating === "poor"}
                name="qualityRating"
                type="radio"
                label="Poor"
                handleChange={(e) => handleRatingSelect(e)}
              />
              <Radio
                value="average"
                label="Average"
                id={`qualityRating_average`}
                checked={formData.qualityRating === "average"}
                name="qualityRating"
                type="radio"
                handleChange={(e) => handleRatingSelect(e)}
              />
              <Radio
                value="excellent"
                label="Excellent"
                id={`qualityRating_excellent`}
                checked={formData.qualityRating === "excellent"}
                name="qualityRating"
                type="radio"
                handleChange={(e) => handleRatingSelect(e)}
              />
            </div>
          </div>
          <div className="rateYourVendor_form-radio">
            <div className="rateYourVendor_form-radio_title">Delivery</div>
            <div className="rateYourVendor_form-radio_container">
              <Radio
                value="poor"
                id={`deliveryRating_poor`}
                checked={formData.deliveryRating === "poor"}
                name="deliveryRating"
                type="radio"
                label="Poor"
                handleChange={(e) => handleRatingSelect(e)}
              />
              <Radio
                value="average"
                label="Average"
                id={`deliveryRating_average`}
                checked={formData.deliveryRating === "average"}
                name="deliveryRating"
                type="radio"
                handleChange={(e) => handleRatingSelect(e)}
              />
              <Radio
                value="excellent"
                label="Excellent"
                id={`deliveryRating_excellent`}
                checked={formData.deliveryRating === "excellent"}
                name="deliveryRating"
                type="radio"
                handleChange={(e) => handleRatingSelect(e)}
              />
            </div>
          </div>
          <div className="rateYourVendor_form-radio">
            <div className="rateYourVendor_form-radio_title">Price</div>
            <div className="rateYourVendor_form-radio_container">
              <Radio
                value="poor"
                id={`priceRating_poor`}
                checked={formData.priceRating === "poor"}
                name="priceRating"
                type="radio"
                label="Poor"
                handleChange={(e) => handleRatingSelect(e)}
              />
              <Radio
                value="average"
                label="Average"
                id={`priceRating_average`}
                checked={formData.priceRating === "average"}
                name="priceRating"
                type="radio"
                handleChange={(e) => handleRatingSelect(e)}
              />
              <Radio
                value="excellent"
                label="Excellent"
                id={`priceRating_excellent`}
                checked={formData.priceRating === "excellent"}
                name="priceRating"
                type="radio"
                handleChange={(e) => handleRatingSelect(e)}
              />
            </div>
          </div>
          <div className="rateYourVendor_form-radio">
            <div className="rateYourVendor_form-radio_title">Service</div>
            <div className="rateYourVendor_form-radio_container">
              <Radio
                value="poor"
                id={`serviceRating_poor`}
                checked={formData.serviceRating === "poor"}
                name="serviceRating"
                type="radio"
                label="Poor"
                handleChange={(e) => handleRatingSelect(e)}
              />
              <Radio
                value="average"
                label="Average"
                id={`serviceRating_average`}
                checked={formData.serviceRating === "average"}
                name="serviceRating"
                type="radio"
                handleChange={(e) => handleRatingSelect(e)}
              />
              <Radio
                value="excellent"
                label="Excellent"
                id={`serviceRating_excellent`}
                checked={formData.serviceRating === "excellent"}
                name="serviceRating"
                type="radio"
                handleChange={(e) => handleRatingSelect(e)}
              />
            </div>
          </div>
          <div className="rateYourVendor_form-radio">
            <div className="rateYourVendor_form-radio_title">Risk</div>
            <div className="rateYourVendor_form-radio_container">
              <Radio
                value="poor"
                id={`riskRating_poor`}
                checked={formData.riskRating === "poor"}
                name="riskRating"
                type="radio"
                label="Poor"
                handleChange={(e) => handleRatingSelect(e)}
              />
              <Radio
                value="average"
                label="Average"
                id={`riskRating_average`}
                checked={formData.riskRating === "average"}
                name="riskRating"
                type="radio"
                handleChange={(e) => handleRatingSelect(e)}
              />
              <Radio
                value="excellent"
                label="Excellent"
                id={`riskRating_excellent`}
                checked={formData.riskRating === "excellent"}
                name="riskRating"
                type="radio"
                handleChange={(e) => handleRatingSelect(e)}
              />
            </div>
          </div>

          <div className="rateYourVendor_form-input">
            <Input
              id="contract-productService-input"
              name="averateRating"
              isRequired
              label="Average Rating"
              handleChange={handleTextChange}
              value={averateRating}
            />
          </div>

          <div className="rateYourVendor_form-actions">
            <div className="rateYourVendor_form-actionBtn">
              <Button variant="primary" handleClick={handleSubmit}>
                Submit
              </Button>
            </div>
            <div className="rateYourVendor_form-actionBtn">
              <Button>Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateYourVendor;
