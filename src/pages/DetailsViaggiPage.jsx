import DetailsViaggi from "../Components/DetailsViaggi/DetailsViaggi";
import SearchBarComponent from "../Components/Search-bar/SearchBarComponent";
import React from "react";

function DetailsViaggiPage() {
  return (
    <>
      <div className="d-flex flex-column detailsViaggi">
        <SearchBarComponent />
        <DetailsViaggi />
      </div>
    </>
  );
}
export default DetailsViaggiPage;
