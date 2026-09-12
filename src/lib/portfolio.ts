// Add only approved work and client quotes here. Empty collections render honest empty states.
export const portfolio: {
  reel: { src: string; poster?: string } | null;
  projects: {
    title: string;
    category: string;
    role: string;
    video: string;
    description: string;
  }[];
  testimonials: { quote: string; name: string; role: string }[];
} = { reel: null, projects: [], testimonials: [] };

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "anabat.editor@gmail.com";
