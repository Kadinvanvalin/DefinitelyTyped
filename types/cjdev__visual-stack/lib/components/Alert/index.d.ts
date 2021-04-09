import * as React from "react";

export type AlertType = "info" | "warning" | "success";

export type AlertCloseType = "icon" | "button";

export interface AlertProps {
    type?: AlertType;
    closeType?: AlertCloseType;
}

export const Alert: React.FC<AlertProps>;
