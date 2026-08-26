import type { Metadata } from "next";

import { ModelPage } from "@/components/model/model-page";
import { x70PlusPage } from "@/lib/details/x70-plus";

export const metadata: Metadata = {
  title: x70PlusPage.name,
  description: x70PlusPage.description,
};

export default function X70PlusPage() {
  return <ModelPage model={x70PlusPage} />;
}
