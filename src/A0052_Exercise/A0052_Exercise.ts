type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOptions(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }
  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }
  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('#####');
      console.log('');
    }
  }
}

const votation1 = new Votation('Favorite programmimg language?');
votation1.addVotationOptions({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOptions({ option: 'JavaScript', numberOfVotes: 0 });
votation1.addVotationOptions({ option: 'TypeScript', numberOfVotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);

const votation2 = new Votation('Favorite color?');
votation2.addVotationOptions({ option: 'Red', numberOfVotes: 0 });
votation2.addVotationOptions({ option: 'Green', numberOfVotes: 0 });
votation2.addVotationOptions({ option: 'Blue', numberOfVotes: 0 });
votation2.addVotationOptions({ option: 'Purple', numberOfVotes: 0 });
votation2.vote(1);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);
votation2.vote(2);
votation2.vote(3);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
