import { shallowMount } from "@vue/test-utils";
import Loading from "@/components/Loading.vue";
import { localVue } from "../common";
import VueWait from "vue-wait";

describe("Loading Component", () => {
  it("renders", () => {
    const wrapper = shallowMount(Loading, {
      localVue,
      wait: new VueWait()
    } as any);
    expect(wrapper).toBeDefined();
  });
});
