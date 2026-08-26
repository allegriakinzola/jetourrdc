import type { Metadata } from "next";

import { ModelPage } from "@/components/model/model-page";
import { dashingPage } from "@/lib/details/dashing";

export const metadata: Metadata = {
  title: dashingPage.name,
  description: dashingPage.description,
};

export default function DashingPage() {
  return <ModelPage model={dashingPage} />;
}
