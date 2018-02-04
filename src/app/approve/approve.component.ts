import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-approve',
    templateUrl: './approve.component.html',
    styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {

    id: string;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id === '404nf') {
            this.router.navigate(['notfound']);
        }
    }

}
