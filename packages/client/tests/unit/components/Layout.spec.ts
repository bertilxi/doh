import { shallowMount } from "@vue/test-utils";
import Layout from "@/components/Layout.vue";

describe("Layout Component", () => {
  it("renders", () => {
    const wrapper = shallowMount(Layout);
    expect(wrapper).toBeDefined();
  });
});
