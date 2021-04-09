import * as React from 'react';

export interface LinkGroupProps {
    expanded?: boolean;
    onClick: (...args: any[])=>any;
    label: string;
    toggleSideNav: (...args: any[])=>any;
}

export class LinkGroup extends React.Component<LinkGroupProps, any> {
    render(): JSX.Element;

}
