import {Track} from "./track";
import {Voter} from "./voter";

export class Ballot {
    id: string;
    approved: boolean;
    rejectReason: string;
    voter: Voter;
    tracks: Track[];
}
