import { createLazyFileRoute } from "@tanstack/react-router";

import { View } from "@/components/layout/View.tsx";
import { Index } from "@/components/views/index/Index";

const Component = () => (
  <View>
    <Index />
  </View>
);

export const Route = createLazyFileRoute("/")({
  component: Component,
});
