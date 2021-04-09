import * as React from 'react';

export type BadgeVariant = "cj-green" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

export interface BadgeProps {
    children?: React.ReactNode;
    className?: string;
    variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps>;
