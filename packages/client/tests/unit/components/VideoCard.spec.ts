import { mount } from "@vue/test-utils";
import VideoCard from "@/components/VideoCard.vue";

describe("VideoCard Component", () => {
  it("renders", () => {
    const wrapper = mount(VideoCard, {
      propsData: {
        src: ""
      }
    });
    expect(wrapper).toBeDefined();
  });
});
