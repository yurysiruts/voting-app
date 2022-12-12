import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CandidateService } from 'src/app/store/candidate/service';
import { ICandidate } from 'src/app/store/candidate/type';
import { VoterService } from 'src/app/store/voter/service';
import { IVoter } from 'src/app/store/voter/type';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  public subscription$: Subscription = new Subscription();
  public voteForm = this.fb.group({
    voterName: [null, Validators.required],
    candidateName: [null, Validators.required],
  });
  public voters: IVoter[] = [];
  public candidates: ICandidate[] = [];

  constructor(private fb: FormBuilder, private voterService: VoterService, private candidateService: CandidateService) {
    this.subscription$.add(
      this.voterService.voters$.subscribe((voters: IVoter[]) => {
        this.voters = voters;
      })
    )
    this.subscription$.add(
      this.candidateService.candidates$.subscribe((candidates: ICandidate[]) => {
        this.candidates = candidates;
      })
    )
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  public onSubmit(form: any) {
    this.voterService.patchVoter(this.voteForm.value);
    this.candidateService.patchCandidate(this.voteForm.value);
    form.resetForm();
  }
}
