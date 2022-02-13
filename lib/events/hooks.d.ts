/// <reference types="web" />
import { TAvoidElementCallbackProps, TAvoidElementEventProps } from "../typings";
export declare const useAvoidElementCallback: ({ datasetName, slotName, callback, }: TAvoidElementCallbackProps) => {
    onEventCallback: (event: Event) => void;
};
export declare const useAvoidElementEvent: ({ datasetName, slotName, dispatchEventName, }: TAvoidElementEventProps) => {
    onEventCallback: (event: Event) => void;
};
//# sourceMappingURL=hooks.d.ts.map