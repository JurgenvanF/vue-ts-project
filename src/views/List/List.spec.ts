import { mount } from "@vue/test-utils";
import List from "./List.vue";

describe("List.vue", () => {
  const setup = () => {
    const wrapper = mount(List);

    return {
      wrapper,
      input: wrapper.find(".list__add__input"),
      addBtn: wrapper.find(".list__add__btn"),
      getItems: () => wrapper.findAll(".list__items__item"),
    };
  };

  it("starts the list empty", async () => {
    const { getItems } = setup();

    const items = getItems();
    expect(items.length).toBe(0);
  });

  it("adds an item to the list", async () => {
    const { input, addBtn, getItems } = setup();

    await input.setValue("Test item");
    await addBtn.trigger("click");

    const items = getItems();
    expect(items.length).toBe(1);
    expect(items[0].text()).toContain("Test item");
  });

  it("removes an item from the list", async () => {
    const { input, addBtn, getItems } = setup();

    await input.setValue("Test item");
    await addBtn.trigger("click");

    let items = getItems();
    expect(items.length).toBe(1);

    await items[0].find(".list__items__item__remove").trigger("click");

    items = getItems();
    expect(items.length).toBe(0);
  });

  it("does not add an empty string to the list", async () => {
    const { input, addBtn, getItems } = setup();

    await input.setValue("");
    await addBtn.trigger("click");

    const items = getItems();
    expect(items.length).toBe(0);
  });
});
