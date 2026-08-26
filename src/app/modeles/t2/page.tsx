import type { Metadata } from "next";

import { ModelPage } from "@/components/model/model-page";
import { t2Page } from "@/lib/details/t2";

export const metadata: Metadata = {
  title: t2Page.name,
  description: t2Page.description,
};

export default function T2Page() {
  return <ModelPage model={t2Page} />;
}
