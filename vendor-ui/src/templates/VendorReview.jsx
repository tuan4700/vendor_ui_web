import { useState } from "react";
import TitleBar from "../components/TitleBar";
import { fakeRateVendor } from "../fakeData";
import Input from "../components/Input";

const VendorReview = () => {
  const tableHeader = [
    "Vendor",
    "Contract",
    "Product/Service",
    "Qualified",
    "Rated By",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="vendorReview">
      <div className="vendorReview_titleBar">
        <TitleBar
          title="Vendor Review"
          search={
            <Input
              id="contact-name-input"
              name="contractMemberCorrect"
              handleChange={(e) => handleSearch(e)}
            />
          }
        />
      </div>

      <div className="vendorReview_contactTable">
        <table className="vendorReview_contactTable-table">
          <thead>
            <tr className="vendorReview_contactTable-headLine">
              {tableHeader.map((ele, index) => (
                <td key={index} className="vendorReview_contactTable-headItem">
                  {ele}
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="vendorReview_contactTable-body">
            {searchTerm !== ""
              ? fakeRateVendor
                  .filter((ele) => ele.vendor.includes(searchTerm))
                  .map((ele, index) => (
                    <tr
                      key={index}
                      className={`vendorReview_contactTable-row `}
                    >
                      <td className="vendorReview_contactTable-data">
                        {ele.vendor}
                      </td>
                      <td className="vendorReview_contactTable-data">
                        {ele.contract}
                      </td>
                      <td className="vendorReview_contactTable-data">
                        {ele.productService}
                      </td>
                      <td className="vendorReview_contactTable-data">
                        {ele.averageRating < 6
                          ? "Good"
                          : ele.averageRating < 8
                          ? "Pretty Good"
                          : "Preeminent"}
                      </td>
                      <td className="vendorReview_contactTable-data">
                        {ele.ratedBy}
                      </td>
                    </tr>
                  ))
              : fakeRateVendor.map((ele, index) => (
                  <tr key={index} className={`vendorReview_contactTable-row `}>
                    <td className="vendorReview_contactTable-data">
                      {ele.vendor}
                    </td>
                    <td className="vendorReview_contactTable-data">
                      {ele.contract}
                    </td>
                    <td className="vendorReview_contactTable-data">
                      {ele.productService}
                    </td>
                    <td className="vendorReview_contactTable-data">
                      {ele.averageRating < 6
                        ? "Good"
                        : ele.averageRating < 8
                        ? "Pretty Good"
                        : "Preeminent"}
                    </td>
                    <td className="vendorReview_contactTable-data">
                      {ele.ratedBy}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorReview;
