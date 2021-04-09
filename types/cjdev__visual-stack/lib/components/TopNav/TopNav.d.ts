import * as React from 'react';

export interface TopNavProps {
    className?: string;
    title?: string;
    actionChildren?: Object;
    children?: Object;
    contentSize?: string;
}

export const TopNav: React.FC<TopNavProps>;
