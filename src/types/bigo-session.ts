import { SessionParticipant } from "./participant";

export interface BigoSessionBase {
    _id: any;
}

export interface BigoSession extends BigoSessionBase {
    date: Date,
    participants: SessionParticipant | SessionParticipant[],
    location: any
}