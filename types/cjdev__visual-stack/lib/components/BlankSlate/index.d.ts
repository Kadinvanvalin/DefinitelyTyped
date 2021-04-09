import * as React from 'react';

export interface BlankSlateProps {
    title?: string;
    subTitle?: string;
    alignment?: string;
    headerGraphic?: Object;
}

export const BlankSlate: React.FC<BlankSlateProps>;

export interface PrimaryActionButtonProps {
    label?: string;
    handler?: (...args: any[])=>any;
}

export const PrimaryActionButton: React.FC<PrimaryActionButtonProps>;

export interface SecondaryActionButtonProps {
    label?: string;
    handler?: (...args: any[])=>any;
}

export const SecondaryActionButton: React.FC<SecondaryActionButtonProps>;

export const SubTitle: React.FC;

export const Description: React.FC;
