import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AddCandidateDialog } from "./dialogs/add-candidate/add-candidate.component";
import { AddVoterDialog } from "./dialogs/add-voter/add-voter.component";

const dialogs = [ AddVoterDialog, AddCandidateDialog ]

const sharedModules = [
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTableModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDialogModule,
];

@NgModule({
  declarations: [dialogs],
  imports: [sharedModules],
  exports: [dialogs, sharedModules],
  providers: [sharedModules],
})
export class SharedModule {}
