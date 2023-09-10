interface Actions {
  reset: () => void;
  add: (id: number) => void;
  remove: (id: number) => void;
}

export interface State {
  data: number[];
}

export type Module = State & Actions;
