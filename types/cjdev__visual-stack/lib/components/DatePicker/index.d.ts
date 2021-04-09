import * as React from 'react';

export interface DatePickerProps {
    selectedRanges?: any[];
    selectedNamedRanges?: string[];
    sidebarConfig?: any[];
    selectableRange?: any[];
    updateCalendarRanges: (...args: any[])=>any;
    updateNamedCalendarRanges: (...args: any[])=>any;
    onApply: (...args: any[])=>any;
    cancelButtonText?: React.ReactNode;
    applyButtonText?: React.ReactNode;
}

export const DatePicker: React.FC<DatePickerProps>;
