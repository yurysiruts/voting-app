import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ICandidate, IVoter } from "./type";

@Injectable({ providedIn: 'root' })
export class AppService {

  votersChanged = new Subject<IVoter[]>();
  candidatesChanged = new Subject<ICandidate[]>();
  
  private voters: IVoter[] = [];

  private candidates: ICandidate[] = [
    { name: 'Trump', votes: 0},
    { name: 'Biden', votes: 0},
  ];

  public getVoters() {
    return this.voters.slice();
  }

  public getCandidates() {
    return this.candidates.slice();
  }

  public addVoter(voter: IVoter) {
    this.voters.push(voter);
    this.votersChanged.next(this.voters.slice());
  }

  public addCandidate(candidate: ICandidate) {
    this.candidates.push(candidate);
    this.candidatesChanged.next(this.candidates.slice());
  }

  public patchVote(data: any) {
    const voterIndex = this.voters.findIndex(voter => voter.name === data.voterName);
    this.voters[voterIndex] = { name: this.voters[voterIndex].name, voted: true };

    const candidateIndex = this.candidates.findIndex(candidate => candidate.name === data.candidateName);
    this.candidates[candidateIndex] = { name: this.candidates[candidateIndex].name, votes: ++this.candidates[candidateIndex].votes };

    this.votersChanged.next(this.voters.slice());
    this.candidatesChanged.next(this.candidates.slice());
  }

}
