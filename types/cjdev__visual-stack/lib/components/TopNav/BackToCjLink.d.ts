import * as React from 'react';

export interface BackToCjLinkProps {
    title?: string;
    onClick?: (...args: any[])=>any;
}

export const BackToCjLink: React.FC<BackToCjLinkProps>;
