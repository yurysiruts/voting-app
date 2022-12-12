import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { VoterService } from "src/app/store/voter/service";

@Component({
  selector: 'add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.scss']
})
export class AddVoterDialog {
  name = new FormControl('');

  constructor(public dialog: MatDialog, private voterService: VoterService) {}

  ngOnInit() {}

  public onSubmit() {
    if (this.name.value) {
      this.dialog.closeAll();
      this.voterService.addVoter({ name: this.name.value, voted: false })
    }
  }
}