import { Category } from "@services/fake-store-api";

export interface StateProps {
  loading: number;
  error: string | null;
  data: Category[];
}
