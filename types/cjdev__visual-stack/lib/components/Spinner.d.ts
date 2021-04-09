import * as React from 'react';

export type SpinnerSize = "small" | "large" | "extra-large" | "button";

export interface SpinnerProps {
    size?: SpinnerSize;
}

const Spinner: React.FC<SpinnerProps>;

export default Spinner;
