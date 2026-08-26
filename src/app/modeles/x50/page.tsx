import type { Metadata } from "next";

import { ModelPage } from "@/components/model/model-page";
import { x50Page } from "@/lib/details/x50";

export const metadata: Metadata = {
  title: x50Page.name,
  description: x50Page.description,
};

export default function X50Page() {
  return <ModelPage model={x50Page} />;
}
