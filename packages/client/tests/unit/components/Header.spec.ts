import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import { localVue, router, store } from "../common";

describe("Header Component", () => {
  it("renders", () => {
    const wrapper = shallowMount(Header, {
      localVue,
      router,
      store
    });
    expect(wrapper).toBeDefined();
  });
});
