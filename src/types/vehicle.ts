import type { Links, TableMeta } from "./common.ts";

export type Vehicle = {
    id: number;
    company_id: number;
    make: string;
    model: string;
    registration_number: string;
};


export interface VehicleState {
    vehicles: {
        links: Links;
        data: Vehicle[];
        meta: TableMeta;
    };
    filter: Record<any, any>;
}
