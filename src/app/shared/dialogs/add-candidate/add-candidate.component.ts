import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { CandidateService } from "src/app/store/candidate/service";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateDialog {
  name = new FormControl('');

  constructor(public dialog: MatDialog, private candidateService: CandidateService) {}

  ngOnInit() {}

  public onSubmit() {
    if (this.name.value) {
      this.dialog.closeAll();
      this.candidateService.addCandidate({ id: uuidv4(), name: this.name.value, votes: 0 });
    }
  }
}