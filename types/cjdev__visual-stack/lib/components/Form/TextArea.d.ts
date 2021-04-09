import * as React from 'react';

export interface TextAreaProps {
    className?: string;
    onBlur?: (...args: any[])=>any;
    onChange?: (...args: any[])=>any;
    placeholder?: string;
    trimmed?: boolean;
    value?: string;
}

const TextArea: React.FC<TextAreaProps>;

export default TextArea;
