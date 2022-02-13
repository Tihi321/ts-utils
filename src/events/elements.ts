import get from "lodash/get";
import isEqual from "lodash/isEqual";
import map from "lodash/map";
import some from "lodash/some";

import type { IIsSlotPresent } from "../typings";

export const isSlotPresent = ({
  elements,
  slotName,
  datasetName,
}: IIsSlotPresent): boolean => {
  const datasets = map(elements, (element: Element) =>
    get(element, ["dataset"])
  );

  return some(datasets, (dataset: any) =>
    isEqual(get(dataset, [datasetName]), slotName)
  );
};
