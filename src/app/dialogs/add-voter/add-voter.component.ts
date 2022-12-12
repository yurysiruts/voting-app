import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { AppService } from "src/app/store/app/service";

@Component({
  selector: 'add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.scss']
})
export class AddVoterDialog {
  name = new FormControl('');

  constructor(public dialog: MatDialog, private appService: AppService) {}

  ngOnInit() {}

  public onSubmit() {
    if (this.name.value) {
      this.dialog.closeAll();
      console.log(this.name.value);
      this.appService.addVoter({ name: this.name.value, voted: false })
    }
  }
}