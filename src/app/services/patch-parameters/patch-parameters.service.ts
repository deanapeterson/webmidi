import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatchParametersService {
  public tempo: number = 120; // Default tempo in BPM
  public numberOfBeats: number = 4; // Default number of beats in the sequence
  public stepsPerBeat: number = 8; // Default steps per beat (16th notes)
  public sequence: Array<[string, { duration: number, rawAttack: number }]> = [];

  public get stepDuration(): number {
    return 60 / this.tempo;
  }

  public get stepSizeMs() {
    return (this.stepDuration / this.stepsPerBeat) * 1000;
  }

  constructor() { }

  setTempo(tempo: number) {
    if (tempo < 20 || tempo > 300) {
      console.error("Tempo must be between 20 and 300 BPM.");
      return;
    }
    this.tempo = tempo;
  }
  setStepsPerBeat(steps: number) {
    if (steps < 1 || steps > 16) {
      console.error("Steps per beat must be between 1 and 16.");
      return;
    }
    this.stepsPerBeat = steps;
  } 

  setNumberOfBeats(beats: number) {
    if (beats < 1 || beats > 8) {
      console.error("Number of beats must be between 1 and 8.");
      return;
    }
    this.numberOfBeats = beats;
  }
}
