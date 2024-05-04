import React from "react";
import TablePagination from "@mui/material/TablePagination";

const CustomPagination = ({
  count,
  page,
  rowsPerPage,
  onChangePage,
  onChangeRowsPerPage,
}) => {
  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={onChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onChangeRowsPerPage}
      rowsPerPageOptions={[rowsPerPage]}
    />
  );
};

export default CustomPagination;
