import * as React from 'react';

export interface ToolbarProps {
    title?: string;
}

export const Toolbar: React.FC<ToolbarProps>;

export interface ActionButtonProps {
    icon: string;
    className?: string;
    onClick: (...args: any[])=>any;
}
export const ActionButton: React.FC<ActionButtonProps>;

export interface HeaderLabels {
    alignment?: "left" | "center" | "right";
    width?: number;
    text: string;
}

export interface HeaderProps {
    labels: HeaderLabels[];
}

export const Header: React.FC<HeaderProps>;

export interface CellProps {
    width?: number;
}
export const Cell: React.FC<CellProps>;

export const List: React.FC;

export const Rows: React.FC;

export const Row: React.FC;
