import { shallowMount } from "@vue/test-utils";
import Random from "@/views/Random.vue";
import { localVue, router, store } from "../common";

describe("Random View", () => {
  it("renders", () => {
    const wrapper = shallowMount(Random, {
      localVue,
      router,
      store
    });
    expect(wrapper).toBeDefined();
  });
});
