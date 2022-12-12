import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ICandidate } from "./type";
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class CandidateService {

  private candidatesSource = new BehaviorSubject<ICandidate[]>([
    { id: uuidv4(), name: 'Trump', votes: 0},
    { id: uuidv4(), name: 'Biden', votes: 0},
  ])
  public candidates$ = this.candidatesSource.asObservable()

  public addCandidate(candidate: ICandidate) {
    this.candidatesSource.next([...this.candidatesSource.getValue(), candidate])
  }

  public patchCandidate(data: any) {
    const candidateIndex = this.candidatesSource.getValue().findIndex(candidate => candidate.id === data.candidateId);
    const candidate = this.candidatesSource.getValue()[candidateIndex]; 
    this.candidatesSource.getValue()[candidateIndex] = { id: candidate.id, name: candidate.name, votes: ++candidate.votes };
    
    this.candidatesSource.next([...this.candidatesSource.getValue()])
  }

}
