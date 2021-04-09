import * as React from 'react';

export type PureCollapsiblePanelPadding = any;

export interface PureCollapsiblePanelProps {
    children?: React.ReactNode;
    className?: string;
    collapsed: boolean;
    onChange: (...args: any[])=>any;
    padding?: PureCollapsiblePanelPadding;
    title?: React.ReactNode;
    titleIcon?: React.ReactNode;
}

export class PureCollapsiblePanel extends React.Component<PureCollapsiblePanelProps, any> {
    render(): JSX.Element;

}

export type CollapsiblePanelPadding = any;

export interface CollapsiblePanelProps {
    children?: React.ReactNode;
    className?: string;
    initializedCollapsed?: boolean;
    padding?: CollapsiblePanelPadding;
    title?: React.ReactNode;
    titleIcon?: React.ReactNode;
}

export default class CollapsiblePanel extends React.Component<CollapsiblePanelProps, any> {
    render(): JSX.Element;

}
