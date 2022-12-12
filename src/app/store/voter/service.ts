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
    const voterIndex = this.votersSource.getValue().findIndex(voter => voter.name === data.voterName);
    this.votersSource.getValue()[voterIndex] = { name: this.votersSource.getValue()[voterIndex].name, voted: true };
    
    this.votersSource.next([...this.votersSource.getValue()])
  }

}
