export type Menu = {
    label: string;
    path: string;
    icon?: string;
}

export type TableMeta = {
    from: number;
    to: number;
    total: number;
    current_page: number;
    per_page: number;
};

export type Links = {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
};

export interface DashboardState {
    analytics: {
        companies: number,
        vehicles: number,
    }
}