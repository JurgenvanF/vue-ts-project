import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import Navbar from "./Navbar.vue";

const createTestRouter = () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: { template: "<div>Home</div>" } },
      { path: "/list", component: { template: "<div>List</div>" } },
      { path: "/counter", component: { template: "<div>Counter</div>" } },
    ],
  });

describe("Navbar.vue", () => {
  const setViewportWidth = (width: number) => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });

    window.dispatchEvent(new Event("resize"));
  };

  const setup = async (viewportWidth = 1000) => {
    const router = createTestRouter();

    setViewportWidth(viewportWidth);

    const wrapper = mount(Navbar, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();
    await wrapper.vm.$nextTick();

    return {
      wrapper,
      router,
      getNavItems: () => wrapper.findAll(".navbaritem"),
      getLinks: () => wrapper.findAll(".navbaritem a"),
      getHamburger: () => wrapper.find(".hamburger"),
    };
  };

  it("renders the navbar with all navigation items", async () => {
    const { wrapper, getNavItems } = await setup();

    expect(wrapper.find("nav").exists()).toBe(true);
    expect(wrapper.find(".navbaritems").exists()).toBe(true);

    const items = getNavItems();
    expect(items.length).toBe(3);

    expect(wrapper.text()).toContain("Home");
    expect(wrapper.text()).toContain("List");
    expect(wrapper.text()).toContain("Counter");
  });

  it("starts on the home route", async () => {
    const { getLinks } = await setup();

    expect(getLinks()[0].classes()).toContain("router-link-active");
    expect(getLinks()[1].classes()).not.toContain("router-link-active");
    expect(getLinks()[2].classes()).not.toContain("router-link-active");
  });

  it("applies correct active styles to the current route", async () => {
    const { router, getLinks } = await setup();

    await router.push("/list");
    await router.isReady();

    expect(getLinks()[0].classes()).not.toContain("router-link-active");
    expect(getLinks()[1].classes()).toContain("router-link-active");
    expect(getLinks()[2].classes()).not.toContain("router-link-active");

    await router.push("/counter");
    await router.isReady();

    expect(getLinks()[0].classes()).not.toContain("router-link-active");
    expect(getLinks()[1].classes()).not.toContain("router-link-active");
    expect(getLinks()[2].classes()).toContain("router-link-active");
  });

  it("handles hover interaction", async () => {
    const { getLinks } = await setup();

    const link = getLinks()[1];

    await link.trigger("mouseenter");
    expect(link.classes()).toContain("is-hovered");

    await link.trigger("mouseleave");
    expect(link.classes()).not.toContain("is-hovered");
  });

  it("shows navbar items only on wide screens (800px)", async () => {
    const { wrapper, getHamburger } = await setup();

    expect(wrapper.find(".navbaritems").exists()).toBe(true);
    expect(getHamburger().exists()).toBe(false);
  });

  it("shows hamburger only on narrow screens", async () => {
    const { wrapper, getHamburger } = await setup(600);

    expect(wrapper.find(".navbaritems").exists()).toBe(false);
    expect(getHamburger().exists()).toBe(true);
  });
});
