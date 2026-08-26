import { ModelFeatures } from "@/components/model/model-features";
import { ModelGallery } from "@/components/model/model-gallery";
import { ModelHero } from "@/components/model/model-hero";
import { ModelSpecs } from "@/components/model/model-specs";
import { ModelPitch, ModelStory } from "@/components/model/model-story";
import { ModelViewer360 } from "@/components/model/model-viewer-360";
import type { ModelDetail } from "@/lib/model-detail";

export function ModelPage({ model }: { model: ModelDetail }) {
  return (
    <div>
      <ModelHero model={model} />
      <ModelPitch model={model} />
      {model.viewer ? (
        <ModelViewer360 name={model.name} viewer={model.viewer} />
      ) : null}
      <ModelStory model={model} />
      <ModelGallery items={model.gallery} />
      <ModelSpecs groups={model.specGroups} />
      <ModelFeatures name={model.name} features={model.features} />
    </div>
  );
}
