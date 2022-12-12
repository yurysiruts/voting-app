import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ICandidate } from "./type";

@Injectable({ providedIn: 'root' })
export class CandidateService {

  private candidatesSource = new BehaviorSubject<ICandidate[]>([
    { name: 'Trump', votes: 0},
    { name: 'Biden', votes: 0},
  ])
  public candidates$ = this.candidatesSource.asObservable()

  public addCandidate(candidate: ICandidate) {
    this.candidatesSource.next([...this.candidatesSource.getValue(), candidate])
  }

  public patchCandidate(data: any) {
    const candidateIndex = this.candidatesSource.getValue().findIndex(candidate => candidate.name === data.candidateName);
    const candidate = this.candidatesSource.getValue()[candidateIndex]; 
    this.candidatesSource.getValue()[candidateIndex] = { name: candidate.name, votes: ++candidate.votes };
    
    this.candidatesSource.next([...this.candidatesSource.getValue()])
  }

}
