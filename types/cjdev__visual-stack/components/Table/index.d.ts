import * as React from "../../../react";

export interface TableContainerProps extends React.HTMLAttributes<HTMLElement> {
}

declare const TableContainer: React.FC<TableContainerProps>;

export interface TableTitleProps extends React.HTMLAttributes<HTMLElement> {
}

declare const TableTitle: React.FC<TableTitleProps>;

export interface TableProps extends React.HTMLAttributes<HTMLElement> {
}

declare const Table: React.FC<TableProps>;

export interface THeadProps extends React.HTMLAttributes<HTMLElement> {
}

declare const THead: React.FC<THeadProps>;

export interface TBodyProps extends React.HTMLAttributes<HTMLElement> {
}

declare const TBody: React.FC<TBodyProps>;

export interface ThProps extends React.HTMLAttributes<HTMLElement> {
}

declare const Th: React.FC<ThProps>;

export interface TrProps extends React.HTMLAttributes<HTMLElement> {
}

declare const Tr: React.FC<TrProps>;

export interface TdProps extends React.HTMLAttributes<HTMLElement> {
}

declare const Td: React.FC<TdProps>;

export { TableContainer, TableTitle, Table, THead, TBody, Th, Tr, Td };
