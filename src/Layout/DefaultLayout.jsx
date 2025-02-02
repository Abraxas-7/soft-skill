import { Outlet } from "react-router-dom";

import HeaderComponent from "../Components/Header/HeaderComponent";
import FooterComponent from "../Components/Footer/FooterComponent";

export default function DefaultLayout() {
  return (
    <div>
      <HeaderComponent />
      <main className="Main">
        <Outlet />
      </main>

      <FooterComponent />
    </div>
  );
}
