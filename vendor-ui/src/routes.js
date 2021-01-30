import AddVendorForm from "./templates/AddVendorForm";
import MyVendor from "./templates/MyVendor";
import AddContactForm from "./templates/AddContactForm";
import MyContact from "./templates/MyContact";
import RateYourVendor from "./templates/RateYourVendor";
import VendorReview from "./templates/VendorReview";
import RecommendVendor from "./templates/RecommendVendor";
import EditHistory from "./templates/EditHistory";
import VendorSendReport from "./templates/VendorSendReport";

const routes = [
  {
    link: "/add-vendor-form",
    component: <AddVendorForm />,
  },
  {
    link: "/vendor-recommend",
    component: <RecommendVendor />,
  },
  {
    link: "/my-vendor",
    component: <MyVendor />,
  },
  {
    link: "/add-contact-form",
    component: <AddContactForm />,
  },
  {
    link: "/my-contact",
    component: <MyContact />,
  },
  {
    link: "/rate-your-vendor",
    component: <RateYourVendor />,
  },
  {
    link: "/vendor-review",
    component: <VendorReview />,
  },
  {
    link: "/edit-history",
    component: <EditHistory />,
  },
  {
    link: "/vendor-send-report",
    component: <VendorSendReport />,
  },
];

export default routes;
