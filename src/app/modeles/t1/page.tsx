import type { Metadata } from "next";

import { ModelPage } from "@/components/model/model-page";
import { t1Page } from "@/lib/details/t1";

export const metadata: Metadata = {
  title: t1Page.name,
  description: t1Page.description,
};

export default function T1Page() {
  return <ModelPage model={t1Page} />;
}
