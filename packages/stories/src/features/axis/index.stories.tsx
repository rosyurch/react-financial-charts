import { Story } from "@storybook/react";
import * as React from "react";
import { YAxis, YAxisProps } from "../../../../axes/src/YAxis";
import AxisExample from "./Axis";

export default {
    component: YAxis,
    title: "Features/Axis",
    argTypes: {
        axisAt: {
            control: {
                type: "select",
                options: ["left", "right", "middle"],
            },
        },
        gridLinesStroke: { control: "color" },
        strokeStyle: { control: "color" },
        tickLabelFill: { control: "color" },
        tickStroke: { control: "color" },
    },
};

const Template: Story<YAxisProps> = (args) => <AxisExample {...args} />;

export const yAxis = Template.bind({});
