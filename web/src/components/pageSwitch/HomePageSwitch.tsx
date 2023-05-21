import { connect } from "react-redux";

import { getShouldRenderMobileComponent } from "@data/selectors/BrowserSelectors";

import DesktopHomePage from "@desktop/HomePage";
import MobileHomePage from "@mobile/HomePage";

const mapStateToProps = (state: any) => ({
  shouldRenderMobileComponent: getShouldRenderMobileComponent(state),
});

type PropsType = ReturnType<typeof mapStateToProps>;

const HomePageSwitch = ({ shouldRenderMobileComponent }: PropsType) => {
  return shouldRenderMobileComponent ? <MobileHomePage /> : <DesktopHomePage />;
};

export default connect(mapStateToProps)(HomePageSwitch);
