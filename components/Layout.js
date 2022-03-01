import React from "react";
import HeaderSimpleBranded from "./HeaderSimpleBranded";
import FooterSocialLinksOnly from "./FooterSocialLinksOnly";

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderSimpleBranded/>
      {children}
        <FooterSocialLinksOnly/>
    </div>
  );
};

export default Layout;
