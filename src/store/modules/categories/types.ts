import { type Category } from "@services/fake-store-api";

interface Actions {
  load: () => Promise<void>;
  reset: () => void;
}

export interface State {
  loading: number;
  error: string | undefined;
  data: Category[];
}

export interface Module extends Actions, State {}
