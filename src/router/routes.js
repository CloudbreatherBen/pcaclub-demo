const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/pcadashboard", component: () => import("pages/PcaDashboard.vue") },
      { path: "/mydashboard", component: () => import("pages/MyDashboard.vue") },
      { path: "/memberservices", component: () => import("pages/MemberServices.vue") },
      { path: "/myprofile", component: () => import("pages/MyProfile.vue") },
      { path: "/tenantannouncements", component: () => import("pages/TenantAnnouncements.vue") },
      { path: "/newsletter", component: () => import("pages/Newsletter.vue") },
      { path: "/disasternetwork", component: () => import("pages/DisasterNetwork.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
