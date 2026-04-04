export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  calendarUrl: string;
  images: {
    profile: string;
    ogImage: string;
  };
  guarantee: string;
};

export const siteConfig: SiteConfig = {
  name: "Viktor Malyi",
  title: "Fractional Head of AI for DACH Companies | Viktor Malyi",
  description:
    "I work as Fractional Head of AI: strategy, architecture, team enablement, governance. For companies that invested in AI but have no one in the seat to make it deliver.",
  url: "https://practical-ai-leadership.com",
  calendarUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0lqb2kvUx3MPxlvUIOd28Lzflc4LgzwWB9p3PHaPc3F1umAaTKDIkplzlPJcFZ9LoX2XyYjg3a?gv=true",
  images: {
    profile: "/images/viktor-malyi.jpg",
    ogImage: "/images/og-image.jpg",
  },
  guarantee: "",
};
