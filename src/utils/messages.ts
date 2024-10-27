import { notification } from "antd";

/**
 *
 * @param msg
 * @constructor
 */
export const TlaSuccess = (msg: string | null = null) =>
  notification.success({
    message: "Success",
    description: msg,
    placement: "bottomLeft",
  });

/**
 *
 * @param msg
 * @constructor
 */
export const TlaWarning = (msg = null) =>
  notification.warning({
    message: "Warning",
    description: msg,
    placement: "bottomLeft",
  });

/**
 *
 * @param msg
 * @constructor
 */
export const TlaError = (msg: string | null = null) =>
  notification.warning({
    message: "Error",
    description: msg,
    placement: "bottomLeft",
  });
