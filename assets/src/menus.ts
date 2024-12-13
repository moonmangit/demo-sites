import MenuCourse from "@/components/demo1/menus/Course.vue";
import MenuTeacher from "@/components/demo1/menus/Teacher.vue";
import MenuOffer from "@/components/demo1/menus/Offer.vue";
import MenuContact from "@/components/demo1/menus/Contact.vue";

export const Demo1Menus: {
  label: string;
  component: any;
}[] = [
  {
    label: "Courses",
    component: MenuCourse,
  },
  {
    label: "Teachers",
    component: MenuTeacher,
  },
  {
    label: "Offers",
    component: MenuOffer,
  },
  {
    label: "Contact",
    component: MenuContact,
  },
];
