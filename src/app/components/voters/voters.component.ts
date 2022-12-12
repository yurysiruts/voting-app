import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddVoterDialog } from 'src/app/dialogs/add-voter/add-voter.component';
import { AppService } from 'src/app/store/app/service';
import { IVoter } from '../../store/app/type';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.scss']
})
export class VotersComponent implements OnInit {
  public displayedColumns: string[] = [ 'demo-name', 'demo-voted'];
  public subscription$: Subscription = new Subscription();

  public dataSource: IVoter[] = [];

  constructor(public dialog: MatDialog, private appService: AppService) {
    this.subscription$.add(
      this.appService.votersChanged.subscribe(
        (voters: IVoter[]) => {
          this.dataSource = voters;
        }
      )
    )
  }

  ngOnInit(): void {
    this.dataSource = this.appService.getVoters();
  }

  openDialog() {
    this.dialog.open(AddVoterDialog);
  }

}
