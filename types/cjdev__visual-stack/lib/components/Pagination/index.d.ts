import * as React from "react";

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
    page?: number;
    rowsPerPage?: number;
    numberOfRows: number;
    onChange: () => void;
}

export const Pagination: React.FC<PaginationProps>;
