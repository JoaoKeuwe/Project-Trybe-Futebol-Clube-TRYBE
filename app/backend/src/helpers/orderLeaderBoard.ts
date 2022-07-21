import { ILeaderBoard } from '../interfaces/leaderBoard.interface';

const orderLeaderboard = (current: ILeaderBoard, next:ILeaderBoard) => {
  if (current.totalPoints < next.totalPoints) { return 1; }
  if (current.totalPoints > next.totalPoints) { return -1; }
  if (current.totalVictories < next.totalVictories) { return 1; }
  if (current.totalVictories > next.totalVictories) { return -1; }
  if (current.goalsBalance < next.goalsBalance) { return 1; }
  if (current.goalsBalance > next.goalsBalance) { return -1; }
  if (current.goalsFavor < next.goalsFavor) { return 1; }
  if (current.goalsFavor > next.goalsFavor) { return -1; }
  if (current.goalsOwn < next.goalsOwn) { return 1; }
  if (current.goalsOwn > next.goalsOwn) { return -1; }
  return 0;
};

export default orderLeaderboard;
