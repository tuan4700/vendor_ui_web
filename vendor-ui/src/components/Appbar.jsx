import Icon from "./Icon";

const Appbar = ({ handleOpenDrawer }) => {
  return (
    <div className="appbar">
      <div className="appbar_menu" onClick={handleOpenDrawer}>
        <Icon name="menu" />
      </div>

      <div className="appbar_account">
        <div className="appbar_account-name">Anh Tuan</div>
        <div className="appbar_account-avatar">T</div>
        <div className="appbar_account-icon">
          <Icon name="bell" />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
