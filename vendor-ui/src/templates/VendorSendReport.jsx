import TitleBar from "../components/TitleBar";
import Button from "../components/Button";
import Icon from "../components/Icon";
const VendorSendReport = () => {
  return (
    <div className="vendorSendReport">
      <div className="vendorSendReport_titleBar">
        <div className="vendorSendReport_title">Vendor Send Report</div>
        <div className="vendorSendReport_actions">
          <div className="vendorSendReport_actions-btn vendorSendReport_actions-sort">
            <Button size="small">Sắp xếp</Button>
          </div>
          <div className="vendorSendReport_actions-btn vendorSendReport_actions-export">
            <Button size="small">
              <Icon name="export" />
            </Button>
          </div>
          <div className="vendorSendReport_actions-btn vendorSendReport_actions-chart">
            <Button size="small">
              <Icon name="chart" />
            </Button>
          </div>
          <div className="vendorSendReport_actions-btn vendorSendReport_actions-refresh">
            <Button size="small">Refresh</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSendReport;
