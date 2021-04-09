import * as React from "react";
export interface PageChange { page: number; rowsPerPage: number; }
export type PaginationOnChange = (pageChange: PageChange) => void;

export interface PaginationProps {
    page?: number;
    rowsPerPage?: number;
    numberOfRows: number;
    onChange: PaginationOnChange;
}

export const Pagination: React.FC<PaginationProps>;
