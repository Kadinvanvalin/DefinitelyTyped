import * as React from 'react';

export interface ButtonWithDropdownProps {
    expanded?: boolean;
    doExpand?: (...args: any[])=>any;
    buttonContent?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    renderButton?: (...args: any[])=>any;
}

export const ButtonWithDropdown: React.FC<ButtonWithDropdownProps>;
