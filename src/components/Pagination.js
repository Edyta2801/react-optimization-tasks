import React from "react";

function Pagination({ page, allPages }) {
  return (
    <div>
      Page {page}/{allPages}
    </div>
  );
}
export default Pagination;
