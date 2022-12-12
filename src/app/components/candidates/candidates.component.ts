import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddCandidateDialog } from 'src/app/dialogs/add-candidate/add-candidate.component';
import { AppService } from 'src/app/store/app/service';
import { ICandidate } from '../../store/app/type';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  public displayedColumns: string[] = ['demo-name', 'demo-votes'];
  public subscription$: Subscription = new Subscription();

  public dataSource: ICandidate[] = [];

  constructor(public dialog: MatDialog, private appService: AppService) {
    this.subscription$.add(
      this.appService.candidatesChanged.subscribe(
        (candidates: ICandidate[]) => {
          this.dataSource = candidates;
        }
      )
    )
  }

  ngOnInit(): void {
    this.dataSource = this.appService.getCandidates();
  }

  openDialog() {
    this.dialog.open(AddCandidateDialog);
  }
}
