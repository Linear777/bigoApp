import { Bigo } from "./bigo";

export interface SessionParticipant {
    name: string;
    bigos: Bigo | Bigo[]
}