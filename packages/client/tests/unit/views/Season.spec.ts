import { shallowMount } from "@vue/test-utils";
import Season from "@/views/Season.vue";
import { localVue, router, store } from "../common";

describe("Season View", () => {
  it("renders", () => {
    const wrapper = shallowMount(Season, {
      localVue,
      router,
      store
    });
    expect(wrapper).toBeDefined();
  });
});
