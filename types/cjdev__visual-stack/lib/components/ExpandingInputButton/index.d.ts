import * as React from 'react';

export interface ExpandingInputButtonProps {
    focused?: boolean;
    name?: string;
    placeholder?: string;
    value?: string;
    onBlur?: (...args: any[])=>any;
    onChange?: (...args: any[])=>any;
    onClear?: (...args: any[])=>any;
    onFocus?: (...args: any[])=>any;
}

export const ExpandingInputButton: React.FC<ExpandingInputButtonProps>;
