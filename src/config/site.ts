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
  title: "Make AI Coding Tools Actually Work | Viktor Malyi",
  description:
    "24-hour audit: full AGENTS.md coverage, guidance for anti-patterns AI could multiply, and a DevEx baseline. All grounded in your codebase.",
  url: "https://practical-ai-leadership.com",
  calendarUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0lqb2kvUx3MPxlvUIOd28Lzflc4LgzwWB9p3PHaPc3F1umAaTKDIkplzlPJcFZ9LoX2XyYjg3a?gv=true",
  images: {
    profile: "/images/viktor-malyi.jpg",
    ogImage: "/images/og-image.jpg",
  },
  guarantee: "If the audit doesn't identify meaningful improvements, full refund.",
};
