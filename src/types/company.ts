import type { Links, TableMeta } from "./common.ts";

export type Company = {
    id: number;
    name: string;
    address: string;
    contactDetails: {
        contact_person: string;
        email: string;
        phone: string;
        website: string;
    }
};


export interface CompanyState {
    companies: {
        links: Links;
        data: Company[];
        meta: TableMeta;
    };
    filter: Record<any, any>;
}
