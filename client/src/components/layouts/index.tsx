import React from "react";

import { MantineProvider } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";

import { HeaderMegaMenu } from "./navbar";

import "@mantine/nprogress/styles.css";
import "@mantine/core/styles.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider>
      <NavigationProgress />
      <HeaderMegaMenu />
      {children}
    </MantineProvider>
  );
};
export default layout;
