import * as React from "react";
import { PointAndFigureSeries } from "../../../../series/src/PointAndFigureSeries";
import { Daily } from "./basicPointAndFigureSeries";

export default {
    component: PointAndFigureSeries,
    title: "Visualization/Series/Point & Figure",
};

export const daily = () => <Daily />;
