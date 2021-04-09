import * as React from 'react';

export interface DatePickerButtonProps {
    expanded?: boolean;
    children?: React.ReactNode;
}

const DatePickerButton: React.FC<DatePickerButtonProps>;

export default DatePickerButton;

export const dateRangeDisplayFactory: React.FC;
