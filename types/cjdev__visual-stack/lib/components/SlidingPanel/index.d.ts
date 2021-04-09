import * as React from 'react';

export interface ToggleIconProps {
    onClick: (...args: any[])=>any;
    toggleIconState?: boolean;
    hoverText?: string;
    label?: string;
}

export const ToggleIcon: React.FC<ToggleIconProps>;

export interface SlidingPanelProps {
    children?: any;
    active?: boolean;
}

export const SlidingPanel: React.FC<SlidingPanelProps>;

export interface SlidingPanelHeaderProps {
    children?: any;
    className?: string;
}

export const SlidingPanelHeader: React.FC<SlidingPanelHeaderProps>;

export interface SlidingPanelSectionProps {
    children?: any;
}

export const SlidingPanelSection: React.FC<SlidingPanelSectionProps>;

export interface SlidingPanelDropdownProps {
    id?: string;
    children?: any;
    label?: any;
    onClick?: (...args: any[])=>any;
    expanded?: boolean;
}

export const SlidingPanelDropdown: React.FC<SlidingPanelDropdownProps>;
