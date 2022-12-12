import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddVoterDialog } from 'src/app/shared/dialogs/add-voter/add-voter.component';
import { VoterService } from 'src/app/store/voter/service';
import { IVoter } from 'src/app/store/voter/type';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.scss']
})
export class VotersComponent implements OnDestroy {
  public displayedColumns: string[] = [ 'demo-name', 'demo-voted'];
  public subscription$: Subscription = new Subscription();

  public dataSource: IVoter[] = [];

  constructor(public dialog: MatDialog, private voterService: VoterService) {
    this.subscription$.add(
      this.voterService.voters$.subscribe((voters: IVoter[]) => {
        this.dataSource = voters;
      })
    )
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  openDialog() {
    this.dialog.open(AddVoterDialog);
  }

}
