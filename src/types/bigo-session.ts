import { SessionParticipant } from "./participant";

export interface BigoSession {
    date: Date,
    participants: SessionParticipant | SessionParticipant[],
    location: any
}