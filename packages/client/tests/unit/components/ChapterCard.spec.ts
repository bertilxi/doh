import { mount } from "@vue/test-utils";
import ChapterCard from "@/components/ChapterCard.vue";

describe("ChapterCard component", () => {
  it("renders", () => {
    const wrapper = mount(ChapterCard, {
      propsData: {
        chapter: {
          id: 1,
          seasonId: 1,
          chapterNumber: 1,
          title: '1x1: "Especial de Navidad"',
          image:
            "https://www.simpsonizados.org/api/imagen.php?src=https://2.bp.blogspot.com/-ULwGwifOGww/VzPl-1t8_LI/AAAAAAAAxLA/ZjuSukp9APMiG-DWgTgja-pqwcbUlsVHgCLcB/s200/1x1.jpg&w=150&h=85&zc=1",
          description:
            "La navidad está a punto de arruinarse, ya que Marge debe gastar todo el dinero destinado a los obsequios de la familia, para quitar el tatuaje a Bart. Además, Burns decide no darle a sus empleados un bono de navidad, por lo que Homero debe conseguir un trabajo de Santa Claus en el centro comercial, pero termina apostando dinero en el galgódromo, en donde conocen a Ayudante de Santa.",
          langs: [
            {
              iframe:
                "https://www.simpsonizados.org/iframe3.php?id=994&tipo=latino",
              label: "Audio Latino"
            },
            {
              iframe:
                "https://www.simpsonizados.org/iframe3.php?id=994&tipo=subtitulado&update=1.1",
              label: "Subtitulado"
            }
          ]
        }
      }
    });
    expect(wrapper).toBeDefined();
  });
});
