import {VoteComponent} from './vote.component' ;

describe('VoteComponent', () => {
  let votingComponent: VoteComponent;

  beforeEach(() => {
    votingComponent = new VoteComponent();
  });
  afterEach(() => {
    votingComponent.totalVotes = 0;
  });

  it('should execute down vote', () => {
    votingComponent.downVote();
    expect(votingComponent.totalVotes).toBe(-1);
  });

  it('should execute up vote', () => {
    votingComponent.upVote();
    expect(votingComponent.totalVotes).toBe(1);
  });
});
