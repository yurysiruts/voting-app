import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { AppService } from "src/app/store/app/service";

@Component({
  selector: 'add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateDialog {
  name = new FormControl('');

  constructor(public dialog: MatDialog, private appService: AppService) {}

  ngOnInit() {}

  public onSubmit() {
    if (this.name.value) {
      this.dialog.closeAll();
      console.log(this.name.value);
      this.appService.addCandidate({ name: this.name.value, votes: 0 })
    }
  }
}