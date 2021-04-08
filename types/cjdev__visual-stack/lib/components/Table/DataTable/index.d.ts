import * as React from "react";
import { PaginationOnChange } from "@cjdev/visual-stack";

export interface DataTableProps {
    caption?: string;
    description?: string;
    columns?: any[];
    data?: any[];
    isLoading?: boolean;
    loadingMessage?: string;
    rowsPerPage?: number;
    page?: number;
    onPageChange: PaginationOnChange;
    pagination?: boolean;
    sortingOption?: {
        label: string;
        order: string;
    };
    sortable?: boolean;
    onSort: () => void;
    selectable?: boolean;
    renderToolbar: () => void;
    noDataLabel?: string;
    rowsPerPageTemplate: string;
    totalRecordsTemplate: string;
}

export const DataTable: React.FC<DataTableProps>;
