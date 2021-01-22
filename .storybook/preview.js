import React from "react";
import { ThemeDecorator } from "@devtools-ds/storybook-theme-addon";
import { themes as storybookThemes } from "@storybook/theming";
import { makeDecorator } from "@storybook/addons";
import { text } from "@storybook/addon-knobs";

import brandImage from "./devtools-ds-logo.svg";
import brandImageDark from "./devtools-ds-logo-dark.svg";

import * as dsPreview from "@design-systems/storybook/preview";

const brand = {
  brandTitle: "Devtools DS Storybook",
  brandUrl: "https://github.com/intuit/devtools-ds",
};

const compare = (order) => (a, b) => {
  let first = order.findIndex((str) => str === a.toLowerCase());
  let second = order.findIndex((str) => str === b.toLowerCase());

  if (first === -1) first = order.length;
  if (second === -1) second = order.length;

  return first < second ? -1 : second < first ? 1 : 0;
};

const sectionOrder = ["getting started", "components", "utilities"];

const sectionCompare = compare(sectionOrder);

const storyOrder = [
  "welcome",
  "gallery",
  "overview",
  "playground",
  "visual guide",
  "features",
  "examples",
];

const storyCompare = compare(storyOrder);

const FontDecorator = makeDecorator({
  name: "fontSize",
  parameterName: "fontSize",
  wrapper: (getStory, context, { parameters }) => {
    let p = parameters || {};
    let starting = p.fontSize || "11px";
    if (typeof starting === "number") {
      starting = `${starting}px`;
    }

    const fontSize = text("Font Size", starting);

    return React.createElement("div", {
      style: { fontSize },
      children: getStory(context),
    });
  },
});

const ContainerDecorator = function (storyFn) {
  return React.createElement("div", {
    style: {
      maxWidth: "800px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    children: storyFn(),
  });
};

export const decorators = [
  ...dsPreview.decorators,
  FontDecorator,
  ContainerDecorator,
  ThemeDecorator,
];

export const parameters = {
  ...dsPreview.parameters,
  jsx: { skip: 0 },
  options: {
    showPanel: true,
  },
  darkMode: {
    light: Object.assign({}, storybookThemes.light, brand, {
      appContentBg: "white",
      brandImage,
      colorPrimary: "#881280",
      colorSecondary: "#881280",
      barSelectedColor: "#881280",
      inputBorder: "#881280",
    }),
    dark: Object.assign({}, storybookThemes.dark, brand, {
      appBg: "#2f3032",
      brandImage: brandImageDark,
      appContentBg: "#2f3032",
      barBg: "#292929",
      colorPrimary: "#5DB0D7",
      colorSecondary: "#5DB0D7",
      barSelectedColor: "#5DB0D7",
      inputBorder: "#5DB0D7",
    }),
  },
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        if (typeof notes === "string") {
          return notes.split("## Usage")[0].split("\n").slice(1).join("\n");
        }

        return notes.markdown || notes.text;
      }

      return null;
    },
  },
  options: {
    showPanel: true,
    panelPosition: "right",
    storySort: ([, a], [, b]) => {
      const [aSection, aComponent, aType] = a.kind.split("/");
      const [bSection, bComponent, bType] = b.kind.split("/");

      if (aComponent === bComponent) {
        const aFolderDepth = a.kind.replace("/Overview", "").split("/").length;
        const bFolderDepth = b.kind.replace("/Overview", "").split("/").length;

        // Make sure folder inside folders come last
        if (aFolderDepth !== bFolderDepth) {
          return aFolderDepth - bFolderDepth;
        }

        return storyCompare(aType || a.name, bType || b.name);
      }

      if (aSection === bSection) {
        if (aSection === "Getting Started") {
          return storyCompare(aComponent, bComponent);
        }

        // Sort components alphabetically
        return aComponent.localeCompare(bComponent);
      }

      // Sort sections according to order defined above
      return sectionCompare(aSection, bSection);
    },
  },
};
