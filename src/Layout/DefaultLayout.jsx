import { Outlet } from "react-router-dom";

import HeaderComponent from "../Components/Header/HeaderComponent";
import FooterComponent from "../Components/Footer/FooterComponent";

export default function DefaultLayout() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
