import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {DataService} from "../services/data.service";
import {Ballot} from "../model/ballot";
import {BallotService} from "../services/ballot.service";

@Component({
    selector: 'app-ballots',
    templateUrl: './ballots.component.html',
    styleUrls: ['./ballots.component.scss']
})
export class BallotsComponent implements OnInit {

    ballots$: Observable<Ballot>;

    reasonModalVisible = false;

    currentBallot: Ballot;

    constructor(private dataService: DataService, private ballotService: BallotService) { }

    ngOnInit() {
        this.ballots$ = this.dataService.allBallots();
    }

    approve(ballot: Ballot): void {
        ballot.approved = true;
        ballot.rejectReason = null;
        this.ballotService.approve(ballot);
    }

    showReasonModal(ballot: Ballot): void {
        this.reasonModalVisible = true;
        this.currentBallot = ballot;
    }

    cancel(): void {
        this.reasonModalVisible = false;
    }

    reject(reason: string): void {
        this.currentBallot.approved = false;
        this.currentBallot.rejectReason = reason;
        this.reasonModalVisible = false;
        this.ballotService.reject(this.currentBallot, reason);
    }

}
