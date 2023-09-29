interface Actions {
  reset: () => void;
  add: (data: Omit<Notification, "id">) => void;
  remove: (id: Notification["id"]) => void;
}

export interface Notification {
  /** Id to identify a specific notification in order remove it from current state. */
  id: number;
  /** Notification types */
  type: "error" | "success" | "warning" | "info";
  /** Notification title */
  title?: string;
  /** Notification description */
  description: string;
}

export interface State {
  data: Notification[];
}

export type Module = State & Actions;
