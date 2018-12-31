import { shallowMount } from "@vue/test-utils";
import Chapter from "@/views/Chapter.vue";
import { localVue, router, store } from "../common";

describe("Chapter View", () => {
  it("renders", () => {
    const wrapper = shallowMount(Chapter, {
      localVue,
      router,
      store
    });
    expect(wrapper).toBeDefined();
  });
});
