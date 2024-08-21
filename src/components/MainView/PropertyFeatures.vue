<template>
  <div class="flex flex-1 gap-6 items-center">
    <div class="flex gap-2.5 self-stretch my-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fc8b4fe8e0d1a5134801693e66114055ed613b21cc2da3c852c3427f9fa9dc3?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
        class="object-contain shrink-0 self-center aspect-[1.35] w-[23px]"
        alt="Bedrooms"
      />
      <span>{{ features.bedrooms }}</span>
    </div>
    <div class="flex gap-2 self-stretch my-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bffbb99d5134bae56fe54a37420a60198924d5a9974f775a1c3b0fba5275146c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
        class="object-contain shrink-0 self-center aspect-square w-[19px]"
        alt="Bathrooms"
      />
      <span>{{ features.bathrooms }}</span>
    </div>
    <div class="flex gap-1.5 self-stretch">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/778768614f4583ecc474666ea6b6d675da07ff5ad0b5a1720c5e2f0c17cd9139?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
        class="object-contain shrink-0 self-center aspect-square w-[27px]"
        alt="Area"
      />
      <span class="self-start">{{ features.area }}</span>
    </div>
    <div class="flex gap-1.5 self-stretch my-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/22da1c07255a5dee5e577046dde6c462690e3d47254ceab2eb111203e01f9593?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
        class="object-contain shrink-0 self-center aspect-square w-[23px]"
        alt="Parking"
      />
      <span class="self-start">{{ features.parking }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Features {
  bedrooms: number;
  bathrooms: number;
  area: number;
  parking: number;
}

export default defineComponent({
  name: "PropertyFeatures",
  props: {
    features: {
      type: Object,
      required: true,
    },
  },
});
</script>
