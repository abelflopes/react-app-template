import { type Product } from "@services/fake-store-api";

interface Actions {
  load: (options?: { category?: string }) => Promise<void>;
  reset: () => void;
}

export interface State {
  loading: number;
  error: string | undefined;
  data: Product[];
}

export interface Module extends Actions, State {}
