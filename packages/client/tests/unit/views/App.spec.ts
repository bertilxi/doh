import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import { localVue, router } from "../common";

describe("App view", () => {
  it("renders", () => {
    const wrapper = shallowMount(App, {
      localVue,
      router
    });
    expect(wrapper).toBeDefined();
  });
});
