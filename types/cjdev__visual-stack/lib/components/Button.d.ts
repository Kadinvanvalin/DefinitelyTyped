import * as React from 'react';

export interface ButtonProps {
}

export const Button: React.FC<ButtonProps>;

export type SubmitButtonType = "primary" | "success" | "info" | "default" | "warning" | "danger" | "solid-primary" | "solid-primary-raised" | "solid-secondary" | "outline-primary" | "outline-secondary" | "outline-secondary-raised" | "rounded-solid" | "rounded-outline" | "icon" | "text" | "text-link" | "inline-outline-secondary" | "solid-primary-pill" | "solid-secondary-pill" | "solid-outline-raised-pill";

export interface SubmitButtonProps {
    type: SubmitButtonType;
    small?: boolean;
    large?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps>;
