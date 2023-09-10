interface Actions {
  reset: () => void;
  add: (data: Omit<Notification, "id">) => void;
  remove: (id: Notification["id"]) => void;
}

export interface Notification {
  /** id to identify a specific notification in order remove it from current state. */
  id: number;
  /** notification types */
  type: "error" | "success" | "warning" | "info";
  /** notification title */
  title?: string;
  /** notification description */
  description: string;
}

export interface State {
  data: Notification[];
}

export type Module = State & Actions;
