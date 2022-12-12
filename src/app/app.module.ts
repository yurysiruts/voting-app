import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VotersComponent } from './components/voters/voters.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VoteComponent } from './components/vote/vote.component';
import { AddVoterDialog } from './dialogs/add-voter/add-voter.component';
import { AddCandidateDialog } from './dialogs/add-candidate/add-candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

const dialogs = [ AddVoterDialog, AddCandidateDialog ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VotersComponent,
    CandidatesComponent,
    VoteComponent,
    dialogs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
