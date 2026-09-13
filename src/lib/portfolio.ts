// Add only approved work and client quotes here. Empty collections render honest empty states.
export const portfolio: {
  reel: { src: string; poster?: string } | null;
  projects: {
    title: string;
    featured?: boolean;
    category: string;
    role: string;
    video: string;
    poster: string;
    description: string;
  }[];
  testimonials: { quote: string; name: string; role: string }[];
} = {
  reel: {
    src: "/videos/real-estate-strategy-showreel.mp4",
    poster: "/posters/real-estate-strategy-showreel.jpg",
  },
  projects: [
    {
      title: "Real estate creator short",
      category: "REAL ESTATE",
      role: "EDIT & MOTION",
      video: "/videos/story-led-short.mp4",
      poster: "/posters/story-led-short.jpg",
      description:
        "A short property-focused creator edit with clear captions and a direct opening hook.",
    },
    {
      title: "Story-led culture edit",
      featured: true,
      category: "SHORT-FORM",
      role: "EDIT & MOTION",
      video: "/videos/founder-brand-edit.mp4",
      poster: "/posters/founder-brand-edit.jpg",
      description:
        "A character-driven cut built around visual hooks, layered graphics, and narrative movement.",
    },
    {
      title: "Luxury real estate campaign",
      featured: true,
      category: "REAL ESTATE",
      role: "EDIT & MOTION",
      video: "/videos/luxury-real-estate.mp4",
      poster: "/posters/luxury-real-estate.jpg",
      description:
        "A bright, sales-focused property edit shaped for quick comprehension and strong mobile retention.",
    },
    {
      title: "High-retention business reel",
      category: "SOCIAL CONTENT",
      role: "EDIT & MOTION",
      video: "/videos/retention-business-reel.mp4",
      poster: "/posters/retention-business-reel.jpg",
      description:
        "Bold typography, graphic transitions, and purposeful pacing keep a dense business story moving.",
    },
    {
      title: "Editorial interview cut",
      category: "INTERVIEW",
      role: "EDIT & DESIGN",
      video: "/videos/editorial-interview.mp4",
      poster: "/posters/editorial-interview.jpg",
      description:
        "A refined interview edit using restrained motion and editorial typography to support the speaker.",
    },
    {
      title: "Logistics motion campaign",
      featured: true,
      category: "BRAND FILM",
      role: "EDIT & MOTION",
      video: "/videos/logistics-motion.mp4",
      poster: "/posters/logistics-motion.jpg",
      description:
        "A product-led campaign with dimensional graphics, crisp compositing, and a tightly controlled rhythm.",
    },
    {
      title: "YouTube growth breakdown",
      category: "CREATOR CONTENT",
      role: "EDIT & MOTION",
      video: "/videos/youtube-growth-edit.mp4",
      poster: "/posters/youtube-growth-edit.jpg",
      description:
        "A clean creator edit that turns performance advice into a fast, graphic-led explanation.",
    },
    {
      title: "Retail growth story",
      category: "BUSINESS CONTENT",
      role: "EDIT & MOTION",
      video: "/videos/retail-growth-edit.mp4",
      poster: "/posters/retail-growth-edit.jpg",
      description:
        "A bold social cut combining a direct-to-camera story with layered retail imagery and motion.",
    },
  ],
  testimonials: [
    {
      quote:
        "Anabat has a real instinct for pacing. The edit felt sharp, intentional, and completely in tune with the story we wanted to tell.",
      name: "@amrafarooq_",
      role: "Client",
    },
    {
      quote:
        "The process was smooth from the first cut to the final delivery. Every note was understood, and the finished video landed exactly where it needed to.",
      name: "@joshsnow",
      role: "Client",
    },
    {
      quote:
        "Fast, thoughtful, and creatively switched on. Anabat brought clarity to the footage and gave the final piece an energy we couldn't have found on our own.",
      name: "@zwr.ai",
      role: "Client",
    },
    {
      quote:
        "Anabat understood the brief quickly and turned it into an edit that felt polished, engaging, and built for the audience from the very first frame.",
      name: "@kcsnetworklimited",
      role: "Client",
    },
  ],
};

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "anabat.editor@gmail.com";
