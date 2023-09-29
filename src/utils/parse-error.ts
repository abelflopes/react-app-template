/**
 * Converts an unknown error object into an user friendly string
 * @param e - Error object
 * @returns string or null
 */

export const parseError = (e: unknown): string | undefined => {
  let messageText = "";

  const error: Error =
    e instanceof Error
      ? e
      : {
          name: "Error",
          message: String(e),
        };

  messageText += error.message;

  return messageText.length > 0 ? messageText : undefined;
};
