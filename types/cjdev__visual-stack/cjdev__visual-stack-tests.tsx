import { DataTable, TableContainer, Table, TableTitle, TBody, Td, Th, THead, Tr } from "@cjdev/visual-stack";
import * as React from "react";

const returnsVoid = () => {
};

const dataTable = (
    <DataTable renderToolbar={returnsVoid} rowsPerPageTemplate={"rowsPerPageTemplate"}
               totalRecordsTemplate={"totalRecordsTemplate"} onPageChange={returnsVoid} onSort={returnsVoid} />
);
const tableContainer = (
    <TableContainer />
);
const tableTitle = (
    <TableTitle />
);
const table = (
    <Table />
);
const tHead = <THead />;
const tBody = <TBody />;
const th = <Th />;
const tr = <Tr />;
const td = <Td />;
