import createSelectors from '@/utils/createSelectors';
import { create } from 'zustand';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { User } from '@/services/api/www.quiz/users';

export type Theme = "light" | "dark"

enum GameState {
  PENDING = 'pending',
  LOADING = 'loading',
  READY = 'ready',
  ERROR = 'error',
  FINISHED = 'finished'
}
interface GameStore {
  state: GameState,
  setState: (state: GameState) => void,
  users: User[],
  addUser: (user: User) => void,
  removeUser: (id: number) => void,
  scores: Map<number, number>,
  addScore: (id: number, score: number) => void,
  
};

const useGameBase = create<GameStore>()((set) => ({
  state: GameState.PENDING,
}));

const useGame = createSelectors(useGameBase);

export default useGame;