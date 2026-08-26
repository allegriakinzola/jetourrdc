import type { Metadata } from "next";

import { ModelPage } from "@/components/model/model-page";
import { g700Page } from "@/lib/details/g700";

export const metadata: Metadata = {
  title: g700Page.name,
  description: g700Page.description,
};

export default function G700Page() {
  return <ModelPage model={g700Page} />;
}
