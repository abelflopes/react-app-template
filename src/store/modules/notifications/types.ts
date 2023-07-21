export type NotificationType = "error" | "success" | "warning" | "info";

export interface Notification {
  /** id to identify a specific notification in order remove it from current state. */
  id: number;
  /** notification types */
  type: NotificationType;
  /** notification title */
  title?: string;
  /** notification description */
  description: string;
}

export interface StateProps {
  data: Notification[];
}
