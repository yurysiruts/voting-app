import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IVoter } from "./type";

@Injectable({ providedIn: 'root' })
export class VoterService {

  private votersSource = new BehaviorSubject<IVoter[]>([])
  public voters$ = this.votersSource.asObservable()

  public addVoter(voter: IVoter) {
    this.votersSource.next([...this.votersSource.getValue(), voter])
  }

  public patchVoter(data: any) {
    const voterIndex = this.votersSource.getValue().findIndex(voter => voter.id === data.voterId);
    const voter = this.votersSource.getValue()[voterIndex]; 
    this.votersSource.getValue()[voterIndex] = { id: voter.id, name: voter.name, voted: true };
    
    this.votersSource.next([...this.votersSource.getValue()])
  }

}
