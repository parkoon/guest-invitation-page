import { isMobile } from "react-device-detect";
const mobileOnlyTrigger = (callback: (isDesktop: boolean) => void) => {
  callback(isMobile);
};

export default mobileOnlyTrigger;
