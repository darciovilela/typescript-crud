import React from "react";

export interface RecordIndexProps<T> {
    ListItem: React.FC<ListItemProps<T>>;
    apiPath: string;
    apiOptions: {};
}

export interface RecordListProps<T> {
    ListItem: React.FC<ListItemProps<T>>;
    records: T[];
}

// record type T can be article or author
export interface ListItemProps<T> {
    record: T;
}