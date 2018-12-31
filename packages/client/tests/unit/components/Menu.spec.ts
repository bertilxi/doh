import { shallowMount } from "@vue/test-utils";
import Menu from "@/components/Menu.vue";

describe("Menu Component", () => {
  it("renders", () => {
    const wrapper = shallowMount(Menu);
    expect(wrapper).toBeDefined();
  });
});
