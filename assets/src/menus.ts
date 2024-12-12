export const Demo1Menus: {
  label: string;
  component: any;
}[] = [
  {
    label: "Courses",
    component: defineAsyncComponent(
      () => import("@/components/demo1/menus/Course.vue")
    ),
  },
  {
    label: "Teachers",
    component: defineAsyncComponent(
      () => import("@/components/demo1/menus/Teacher.vue")
    ),
  },
  {
    label: "Offers",
    component: defineAsyncComponent(
      () => import("@/components/demo1/menus/Offer.vue")
    ),
  },
  {
    label: "Contact",
    component: defineAsyncComponent(
      () => import("@/components/demo1/menus/Contact.vue")
    ),
  },
];
