import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../services/data.service";
import {Ballot} from "../model/ballot";
import {BallotService} from "../services/ballot.service";

@Component({
    selector: 'app-approve',
    templateUrl: './approve.component.html',
    styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {

    ballot: Ballot;
    reasonModalVisible = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private dataService: DataService,
                private ballotService: BallotService) {}

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.dataService.oneBallot(id).subscribe(value => {
            if (value == null) {
                this.router.navigate(['/notfound']);
            } else {
                this.ballot = value;
            }
        });
    }

    approve(): void {
        this.ballotService.approve(this.ballot);
        this.router.navigate(['/ballots']);
    }

    reject(reason: string) {
        this.reasonModalVisible = false;
        this.ballotService.reject(this.ballot, reason);
        this.router.navigate(['/ballots']);
    }

    showReasonModal(): void {
        this.reasonModalVisible = true;
    }

    cancel(): void {
        this.reasonModalVisible = false;
    }
}
