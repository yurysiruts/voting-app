import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/store/app/service';
import { ICandidate, IVoter } from 'src/app/store/app/type';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  public subscription$: Subscription = new Subscription();
  public voteForm = this.fb.group({
    voterName: [null, Validators.required],
    candidateName: [null, Validators.required],
  });
  public voters: IVoter[] = [];
  public candidates: ICandidate[] = [];

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.subscription$.add(
      this.appService.votersChanged.subscribe(
        (voters: IVoter[]) => {
          this.voters = voters;
        }
      )
    )
    this.subscription$.add(
      this.appService.candidatesChanged.subscribe(
        (candidates: ICandidate[]) => {
          this.candidates = candidates;
        }
      )
    )
  }

  ngOnInit(): void {
    this.voters = this.appService.getVoters();
    this.candidates = this.appService.getCandidates();
  }

  public onSubmit(form: any) {
    console.log(this.voteForm.value);
    this.appService.patchVote(this.voteForm.value);
    form.resetForm();
  }
}
