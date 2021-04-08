import * as React from "react";

export interface DataTableProps extends React.HTMLAttributes<HTMLElement> {
    caption?: string;
    description?: string;
    columns?: any[];
    data?: any[];
    isLoading?: boolean;
    loadingMessage?: string;
    rowsPerPage?: number;
    page?: number;
    onPageChange: () => void;
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

declare const DataTable: React.FC<DataTableProps>;
export default DataTable;
