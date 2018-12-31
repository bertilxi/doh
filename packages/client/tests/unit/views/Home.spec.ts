import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { localVue, router } from "../common";

describe("Home view", () => {
  it("renders", () => {
    const wrapper = shallowMount(Home, {
      localVue,
      router
    });
    expect(wrapper).toBeDefined();
  });
});
