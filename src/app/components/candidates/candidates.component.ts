import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddCandidateDialog } from 'src/app/shared/dialogs/add-candidate/add-candidate.component';
import { CandidateService } from 'src/app/store/candidate/service';
import { ICandidate } from '../../store/candidate/type';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnDestroy {
  public displayedColumns: string[] = ['demo-name', 'demo-votes'];
  public subscription$: Subscription = new Subscription();

  public dataSource: ICandidate[] = [];

  constructor(public dialog: MatDialog, private candidateService: CandidateService) {
    this.subscription$.add(
      this.candidateService.candidates$.subscribe((candidates: ICandidate[]) => {
        this.dataSource = candidates;
      })
    )
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  openDialog() {
    this.dialog.open(AddCandidateDialog);
  }
}
