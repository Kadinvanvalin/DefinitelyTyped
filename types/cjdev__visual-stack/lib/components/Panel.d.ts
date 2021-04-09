import * as React from 'react';

export interface HeaderProps {
    title?: string;
}

export const Header: React.FC<HeaderProps>;

export type BodyPadding = "none" | "large";

export interface BodyProps {
    paddingSize?: any;
    padding?: BodyPadding;
}

export const Body: React.FC<BodyProps>;

export const Panel: React.FC;

export const Footer: React.FC;
