/// <reference types="web" />
export interface IIsSlotPresent {
    datasetName: string;
    slotName: string;
    elements?: Element[];
}
export interface TAvoidElementCallbackProps extends IIsSlotPresent {
    callback: Function;
}
export interface TAvoidElementEventProps extends TAvoidElementCallbackProps {
    dispatchEventName: string;
}
//# sourceMappingURL=events.d.ts.map