import get from "lodash/get";

import { TAvoidElementCallbackProps, TAvoidElementEventProps } from "../typings";
import { isSlotPresent } from "./elements";
import { dispatchEvent } from "./events";

export const useAvoidElementCallback = ({
  datasetName,
  slotName,
  callback,
}: TAvoidElementCallbackProps) => {
  const onEventCallback = (event: Event) => {
    if (
      !isSlotPresent({
        elements: get(event, ["path"]),
        datasetName,
        slotName,
      })
    ) {
      callback();
    }
  };

  return {
    onEventCallback,
  };
};

export const useAvoidElementEvent = ({
  datasetName,
  slotName,
  dispatchEventName,
}: TAvoidElementEventProps) => {
  const { onEventCallback } = useAvoidElementCallback({
    datasetName,
    slotName,
    callback: (event: Event) => {
      dispatchEvent({
        element: get(event, ["target"]) as Element,
        name: dispatchEventName,
      });
    },
  });

  return {
    onEventCallback,
  };
};
