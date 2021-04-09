import * as React from 'react';

export interface FormGroupProps {
    error?: React.ReactNode;
    label?: React.ReactNode;
    required?: boolean;
}

const FormGroup: React.FC<FormGroupProps>;

export default FormGroup;
