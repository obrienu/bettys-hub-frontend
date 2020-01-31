import { createSelector } from "reselect";

const rich = state => state.rich;

export const richPreviewSelector = createSelector([rich], rich => rich.preview);
export const richProductSelector = createSelector([rich], rich => rich.product);
export const richLoaderSelector = createSelector([rich], rich => rich.loading);
