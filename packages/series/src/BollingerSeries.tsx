import { ScaleContinuousNumeric } from "d3-scale";
import * as React from "react";
import { AreaOnlySeries } from "./AreaOnlySeries";
import { LineSeries } from "./LineSeries";

export interface BollingerSeriesProps {
    readonly areaClassName?: string;
    readonly className?: string;
    readonly fillStyle?: string | CanvasGradient | CanvasPattern;
    readonly strokeStyle?: {
        top: string | CanvasGradient | CanvasPattern;
        middle: string | CanvasGradient | CanvasPattern;
        bottom: string | CanvasGradient | CanvasPattern;
    };
    readonly yAccessor?: (data: any) => any;
}

export class BollingerSeries extends React.Component<BollingerSeriesProps> {
    public static defaultProps = {
        areaClassName: "react-financial-charts-bollinger-band-series-area",
        fillStyle: "rgba(38, 166, 153, 0.05)",
        strokeStyle: {
            top: "#26a69a",
            middle: "#812828",
            bottom: "#26a69a",
        },
        yAccessor: (data: any) => data.bb,
    };

    public render() {
        const { className, strokeStyle = BollingerSeries.defaultProps.strokeStyle, fillStyle } = this.props;

        return (
            <g className={className}>
                <LineSeries yAccessor={this.yAccessorForTop} strokeStyle={strokeStyle.top} />
                <LineSeries yAccessor={this.yAccessorForMiddle} strokeStyle={strokeStyle.middle} />
                <LineSeries yAccessor={this.yAccessorForBottom} strokeStyle={strokeStyle.bottom} />
                <AreaOnlySeries
                    yAccessor={this.yAccessorForTop}
                    base={this.yAccessorForScaledBottom}
                    fillStyle={fillStyle}
                />
            </g>
        );
    }

    private readonly yAccessorForScaledBottom = (scale: ScaleContinuousNumeric<number, number>, d) => {
        const { yAccessor = BollingerSeries.defaultProps.yAccessor } = this.props;

        return scale(yAccessor(d) && yAccessor(d).bottom);
    };

    private readonly yAccessorForBottom = (d) => {
        const { yAccessor = BollingerSeries.defaultProps.yAccessor } = this.props;

        return yAccessor(d) && yAccessor(d).bottom;
    };

    private readonly yAccessorForMiddle = (d) => {
        const { yAccessor = BollingerSeries.defaultProps.yAccessor } = this.props;

        return yAccessor(d) && yAccessor(d).middle;
    };

    private readonly yAccessorForTop = (d) => {
        const { yAccessor = BollingerSeries.defaultProps.yAccessor } = this.props;

        return yAccessor(d) && yAccessor(d).top;
    };
}
