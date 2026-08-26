"use client";

import { ModelViewer360 } from "@/components/model/model-viewer-360";
import { t2Page } from "@/lib/details/t2";

export function T2Viewer360() {
  if (!t2Page.viewer) return null;
  return <ModelViewer360 name={t2Page.name} viewer={t2Page.viewer} />;
}
