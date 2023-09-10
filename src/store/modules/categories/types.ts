import { Category } from "@services/fake-store-api";

interface Actions {
  load: () => Promise<void>;
  reset: () => void;
}

export interface State {
  loading: number;
  error: string | null;
  data: Category[];
}

export interface Module extends Actions, State {}
