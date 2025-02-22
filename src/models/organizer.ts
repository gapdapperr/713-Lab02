import type { Event } from "../models/event";

export interface Organizer {
    id?: number;
    name: string;
    events?: Event[];
}