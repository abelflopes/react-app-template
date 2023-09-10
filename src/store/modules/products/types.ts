import { Product } from "@services/fake-store-api";

interface Actions {
  load: (options?: { category?: string }) => Promise<void>;
  reset: () => void;
}

export interface State {
  loading: number;
  error: string | null;
  data: Product[];
}

export interface Module extends Actions, State {}
