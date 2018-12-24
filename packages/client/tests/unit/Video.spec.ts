import { shallowMount } from "@vue/test-utils";
import Video from "@/views/Video.vue";

describe("Video.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(Video, {
      mocks: {
        $route: {
          params: {
            selectedChapter: 1,
          },
        },
      },
    });
    const iframe = wrapper.find("#video-iframe");
    expect(iframe.attributes("src")).toBeDefined();
  });
});
