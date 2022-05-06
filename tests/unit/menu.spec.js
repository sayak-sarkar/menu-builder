import data from "../../menu-data.test.json";
import { shallowMount } from "@vue/test-utils";
import Menu from "@/views/Menu.vue";

describe("Menu.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Menu);
  });

  it("renders correct menuItems when passed", () => {
    const output =
      ".Company\n....About Us\n.......Team\n....Contact\n....Mission\n.......Goals\n..........2021\n.Prices\n.References\n....Client 1\n....Client 2\n";
    expect(wrapper.componentVM.menuItems).toEqual(output);
  });

  it("getSortedChildrenByParentId method should return an array sorted by name and filtered by parentId and isHidden", () => {
    data.childrenByParentId.forEach((entry) => {
      expect(
        wrapper.vm.getSortedChildrenByParentId(
          entry.input.id,
          entry.input.items
        )
      ).toEqual(entry.output);
    });
  });

  it("sortByName method should return an array sorted by name attribute", () => {
    data.sortByName.forEach((entry) => {
      expect(wrapper.vm.sortByName(entry.input)).toEqual(entry.output);
    });
  });

  it("buildMenu method should return the correct output", () => {
    data.parseMenu.forEach((entry) => {
      expect(wrapper.vm.buildMenu(entry.input)).toMatch(entry.output);
    });
  });
});
