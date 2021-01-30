import { useState } from "react";
import TitleBar from "../components/TitleBar";
import { fakeContract } from "../fakeData";
import PdfDocument from "../components/PdfDocument";
import { PDFViewer } from "@react-pdf/renderer";
import Input from "../components/Input";

const EditHistory = () => {
  const tableHeader = [
    "Select",
    "Contract Member Correct",
    "Contract",
    "Edit date",
    "Edit Content",
  ];

  const [openPdf, setOpenPdf] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState("0");
  const [searchTerm, setSearchTerm] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="editHistory">
      <div className="editHistory_titleBar">
        <TitleBar
          title="Edit History"
          exportPdf={() => setOpenPdf(true)}
          search={
            <Input
              id="contact-name-input"
              name="contractMemberCorrect"
              handleChange={(e) => handleSearch(e)}
            />
          }
        />
      </div>

      <div className="editHistory_contactTable">
        <table className="editHistory_contactTable-table">
          <thead>
            <tr className="editHistory_contactTable-headLine">
              {tableHeader.map((ele, index) => (
                <td key={index} className="editHistory_contactTable-headItem">
                  {ele}
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="editHistory_contactTable-body">
            {searchTerm !== ""
              ? fakeContract
                  .filter((ele) => ele.contractTitle.includes(searchTerm))
                  .map((ele, index) => (
                    <tr
                      key={index}
                      className={`editHistory_contactTable-row ${
                        index.toString() === selectedInfo ? "selected" : ""
                      }`}
                    >
                      <td className="editHistory_contactTable-radio">
                        <input
                          value={index}
                          id={`type_radio_${index}`}
                          checked={index.toString() === selectedInfo}
                          name="type_radio"
                          type="radio"
                          onChange={(e) => setSelectedInfo(e.target.value)}
                        />
                      </td>
                      <td className="editHistory_contactTable-data">
                        {ele.contractMemberCorrect}
                      </td>
                      <td className="editHistory_contactTable-data">
                        {ele.contract}
                      </td>
                      <td className="editHistory_contactTable-data">
                        {ele.editDate}
                      </td>
                      <td className="editHistory_contactTable-data">
                        {ele.editContent}
                      </td>
                    </tr>
                  ))
              : fakeContract.map((ele, index) => (
                  <tr
                    key={index}
                    className={`editHistory_contactTable-row ${
                      index.toString() === selectedInfo ? "selected" : ""
                    }`}
                  >
                    <td className="editHistory_contactTable-radio">
                      <input
                        value={index}
                        id={`type_radio_${index}`}
                        checked={index.toString() === selectedInfo}
                        name="type_radio"
                        type="radio"
                        onChange={(e) => setSelectedInfo(e.target.value)}
                      />
                    </td>
                    <td className="editHistory_contactTable-data">
                      {ele.contractMemberCorrect}
                    </td>
                    <td className="editHistory_contactTable-data">
                      {ele.product}
                    </td>
                    <td className="editHistory_contactTable-data">
                      {ele.title}
                    </td>
                    <td className="editHistory_contactTable-data">
                      {ele.contract}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <div className={`editHistory_exportPdf${openPdf ? " show" : ""}`}>
        <div className="editHistory_exportPdf-modal ">
          <div
            className="editHistory_exportPdf-close"
            onClick={() => setOpenPdf(false)}
          >
            X
          </div>
          <div className="editHistory_exportPdf-pdfViewer">
            <PDFViewer>
              <PdfDocument data={fakeContract[selectedInfo]} />
            </PDFViewer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHistory;
