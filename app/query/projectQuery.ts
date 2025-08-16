import type { FeatureShowcase, Project } from "~/types/project";

function createProject(
  title: string,
  description: string,
  imageSrc: string,
  tools: string[] = [],
  featureShowcases?: FeatureShowcase[],
): Project {
  return {
    title,
    description,
    imageSrc,
    slug: generateSlug(title),
    featureShowcases: featureShowcases ?? [],
    tools,
  };
}

export async function fetchProjects() {
  const inventoryProject = createProject(
    "Inventory Management",
    "Transform inventory management from excel based into web app. This project helps admin and chef to manage inventory more efficiently. By using web apps, it forces them to always be connected to the internet to avoid unsaved data on the server, and also allows low-end mobile devices to participate in reporting inventory stock.",
    "/images/inventory.png",
    ["Vue", "Pinia", "Primevue", "Supabase", "Tanstack Query"],
    [
      {
        name: "Inventory Management",
        videoSrc: "/showcases/inventory/inventory-stock.mp4",
      },
      {
        name: "Copy from web and paste to excel",
        videoSrc: "/showcases/inventory/excel-copy.mp4",
      },
      {
        name: "WIP inventory",
        videoSrc: "/showcases/inventory/wip-inventory.mp4",
      },
      {
        name: "Inventory Management - Mobile",
        videoSrc: "/showcases/inventory/inventory-mobile.mp4",
      },
    ],
  );

  const taskProject = createProject(
    "Helpdesk Online",
    "Make management more efficiently by migrate from group chat based into webapp. Application help track which task is solved, progress and which task is not solved yet. This project also help to track which task is assigned to which person. Admin create the task for departments. Any member in department can contribute in that task, member work on the task and create solve request to admin. Solve request should be approved by leader first. Finally admin can mark the task as solved after leader approval.",
    "/images/task.png",
    ["Nuxt", "Pinia", "Primevue", "Supabase"],
    [
      {
        name: "Admin Add Task",
        videoSrc: "/showcases/task/admin-create-task.mp4",
      },
      {
        name: "Member explore task",
        videoSrc: "/showcases/task/explore-task.mp4",
      },
      {
        name: "Member add progress",
        videoSrc: "/showcases/task/solve-request.mp4",
      },
      {
        name: "Leader approval",
        videoSrc: "/showcases/task/leader-verify.mp4",
      },
      {
        name: "Admin approval",
        videoSrc: "/showcases/task/admin-verify.mp4",
      },
    ],
  );
  const attendanceProject = createProject(
    "Daily Worker Attendance",
    "Digitalize attendance system for daily workers. Eliminate manual handwriting, system allows users to print daily worker data to achieve same result as handwriting.",
    "/images/attendance.png",
    ["Google Appscript", "jQuery", "Bootstrap"],
    [
      {
        name: "Daily worker attendance",
        imagesSrc: [
          "/showcases/attendance/biodata.png",
          "/showcases/attendance/shift.png",
          "/showcases/attendance/confirm.png",
          "/showcases/attendance/location-validate.png",
          "/showcases/attendance/attendance-success.png",
          "/showcases/attendance/home-attendance.png",
          "/showcases/attendance/home-confirm.png",
          "/showcases/attendance/done.png",
        ],
      },
      {
        name: "Report daily worker",
        imagesSrc: [
          "/showcases/attendance/attendance-sheet.png",
          "/showcases/attendance/report-form.png",
          "/showcases/attendance/weekly-dw-attendance.png",
        ],
      },
    ],
  );

  const inventoryMiniProject = createProject(
    "Inventory Mini",
    "Simple inventory project. I build this project to learn primevue for ui. Learn container and presentational component. Demo link: https://inventory-mini-sederhana.vercel.app",
    "/images/inventory-mini.png",
    ["Vue", "Pinia", "Tanstack Query", "PrimeVue"],
    [
      {
        name: "Admin (full control)",
        videoSrc: "/showcases/inventory-mini/admin.mp4",
      },
      {
        name: "Staff member",
        videoSrc: "/showcases/inventory-mini/member.mp4",
      },
      {
        name: "Viewer (read only)",
        videoSrc: "/showcases/inventory-mini/viewer.mp4",
      },
    ],
  );

  return [
    inventoryProject,
    attendanceProject,
    taskProject,
    inventoryMiniProject,
  ];
}

export async function fetchProject(slug: string) {
  const projects = await fetchProjects();
  return projects.find((project) => project.slug === slug);
}
