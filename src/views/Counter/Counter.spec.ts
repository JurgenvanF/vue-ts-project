import { mount } from "@vue/test-utils";
import Counter from "./Counter.vue";

describe("Counter.vue", () => {
  const setup = () => {
    const wrapper = mount(Counter);

    return {
      wrapper,
      value: wrapper.find(".counter__value__count"),
      addBtn: wrapper.find(".counter__value__add"),
      removeBtn: wrapper.find(".counter__value__remove"),
      resetBtn: wrapper.find(".counter__reset"),
    };
  };

  it("starts the counter at 0", () => {
    const { value } = setup();
    expect(value.text()).toBe("0");
  });

  it("increments the counter", async () => {
    const { value, addBtn } = setup();

    await addBtn.trigger("click");
    expect(value.text()).toBe("1");
  });

  it("decrements the counter", async () => {
    const { value, addBtn, removeBtn } = setup();

    await addBtn.trigger("click");
    expect(value.text()).toBe("1");

    await removeBtn.trigger("click");
    expect(value.text()).toBe("0");
  });

  it("resets the counter", async () => {
    const { value, addBtn, resetBtn } = setup();

    await addBtn.trigger("click");
    await addBtn.trigger("click");
    await addBtn.trigger("click");
    expect(value.text()).toBe("3");

    await resetBtn.trigger("click");
    expect(value.text()).toBe("0");
  });
});
