import { Link } from "react-router-dom";
import Button from "./Button";

const handleCamelToCapital = (text) => {
  var result = text.replace(/([A-Z])/g, " $1");
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

const ContractDrawer = ({ contract, handleClose, handleDelete }) => {
  return (
    <div className="contractDrawer">
      <div className="contractDrawer_actionBar">
        <div className="contractDrawer_actionBar-actionBtn contractDrawer_actionBar-archive">
          <Button variant="outlined">Archive</Button>
        </div>
        <div className="contractDrawer_actionBar-actionBtn contractDrawer_actionBar-edit">
          <Link to="/add-contact-form">
            <Button variant="outlined primary">Edit</Button>
          </Link>
        </div>
        <div className="contractDrawer_actionBar-actionBtn contractDrawer_actionBar-delete">
          <Button variant="outlined" handleClick={handleDelete}>
            {" "}
            Delete
          </Button>
        </div>
        <div className="contractDrawer_actionBar-actionBtn contractDrawer_actionBar-close">
          <Button variant="outlined" handleClick={handleClose}>
            Close
          </Button>
        </div>
      </div>

      <div className="contractDrawer_section">Overview</div>
      <div className="contractDrawer_informationTable">
        {contract &&
          Object.keys(contract).map((ele, index) => (
            <div key={index} className="contractDrawer_informationTable-line">
              <div className="contractDrawer_informationTable-title">
                {handleCamelToCapital(ele)}
              </div>
              <div className="contractDrawer_informationTable-value">
                {contract[ele]}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContractDrawer;
