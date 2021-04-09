import * as React from 'react';

export interface HeaderProps {
    className?: string;
    title?: string;
}

export const Header: React.FC<HeaderProps>;

export const Modal: React.FC;

export const Dialog: React.FC;

export const Content: React.FC;

export const Body: React.FC;

export const Footer: React.FC;

export const Backdrop: React.FC;
