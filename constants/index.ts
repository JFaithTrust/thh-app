export const sidebarLinks = [
    {
      imgURL: "/assets/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/assets/search.svg",
      route: "/search",
      label: "Explore",
    },
    {
        imgURL: "/assets/community.svg",
        route: "/communities",
        label: "Communities",
    },
    {
      imgURL: "/assets/notifications.svg",
      route: "/activity",
      label: "Notifications",
    },
    {
      imgURL: "/assets/create.svg",
      route: "/create-thread",
      label: "Create Post",
    },
    {
      imgURL: "/assets/user.svg",
      route: "/profile",
      label: "Profile",
    },
  ];
  
  export const profileTabs = [
    { value: "posts", label: "Posts", icon: "/assets/reply.svg" },
    // { value: "replies", label: "Replies", icon: "/assets/members.svg" },
    // { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
  ];
  
  export const communityTabs = [
    { value: "posts", label: "Posts", icon: "/assets/reply.svg" },
    { value: "members", label: "Members", icon: "/assets/members.svg" },
    // { value: "requests", label: "Requests", icon: "/assets/request.svg" },
  ];