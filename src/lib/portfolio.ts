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
  reel: null,
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
  ],
  testimonials: [],
};

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "anabat.editor@gmail.com";
