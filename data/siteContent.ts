// =============================================================================
//  SITE CONTENT  —  EDIT YOUR TEXT HERE
// =============================================================================
//
// =============================================================================

export const siteContent = {
  // ---- Your basic identity -------------------------------------------------
  name: "Louise Chili Lauenborg",
  role: "Web & Software Developer among other things",
  tagline:
    "I build clean, reliable web apps with TypeScript, Next.js, and modern tools.",

  // ---- Contact details (shown in the header AND the footer) ---------------
  // Replace these placeholders with your real details when you're ready.
  contact: {
    email: "louiselauenborg@hotmail.com",
    phone: "+45 27827813",
    location: "Esbjerg, Denmark",
    github: "https://github.com/louisechili",
    linkedin: "https://www.linkedin.com/in/louisechililauenborg/",
  },

  // ---- Home page text ------------------------------------------------------
  home: {
    heading: "Hi, I'm Louise Chili! 👋",
    intro:
      "This is a placeholder introduction. I should write two or three sentences about " +
      "who I am, what I build, and the kind of role I am looking for. " +
      "change this text in the file: data/siteContent.ts.",
    contactButtonLabel: "Contact me",
    projectsButtonLabel: "View projects",
    lookingButtonLabel: "What I'm looking for",
  },

  // ---- "What I'm looking for" page text ------------------------------------
  // This page tells recruiters the kind of work I want.
  lookingPage: {
    heading: "What I'm looking for",
    intro:
      "I'm open to roles where I can keep growing as a developer. Here are the " +
      "kinds of work and teams I'm most excited about — but I'm happy to hear " +
      "about anything adjacent too.",

    // Each {} block is one role/interest card. Edit, add, or remove freely.
    roles: [
      {
        title: "Frontend / Full-stack web development",
        description:
          "Building user-facing web apps with TypeScript, React, and Next.js. " +
          "I enjoy turning designs into fast, accessible interfaces.",
      },
      {
        title: "Junior / entry-level developer roles",
        description:
          "A team where I can learn from experienced engineers, get code " +
          "review, and take on real responsibility over time.",
      },
      {
        title: "Working with modern tooling and AI",
        description:
          "Teams that use modern workflows and AI tools to build better " +
          "software — I like learning new tech and shipping real features.",
      },
    ],

    valuesHeading: "What matters to me in a team",
    values: [
      "A culture of learning and mentorship",
      "Clean, well-tested code and honest code review",
      "Building things real people actually use",
    ],

    locationNote:
      "Based in Esbjerg, Denmark. Open to on-site, hybrid, or remote roles.",
  },

  // ---- Contact page text ---------------------------------------------------
  contactPage: {
    heading: "Get in touch with me",
    intro:
      "Please fill out the form to contact me. I also welcome direct emails at louiselauenborg@hotmail.com.This is a placeholder contact page. The form below is not wired up to " +
      "send email yet — it's a starting point I will connect later.",
  },

  // ---- Projects page text --------------------------------------------------
  projectsPage: {
    heading: "Projects",
    intro:
      "This is my projects page. I am adding new projects to the " +
      "list below as I build them.",

    // Each {} block is one project card. Copy a block to add another project.
    projects: [
      {
        title: "Tiny Chili Store — full-stack e-commerce 🌶️",
        description:
          "A complete online store built with Next.js, TypeScript, and " +
          "PostgreSQL (Prisma). Browse products, add to a cart that persists " +
          "across visits, and pay securely via Stripe Checkout. A " +
          "signature-verified Stripe webhook records each order and updates " +
          "inventory. Deployed on Vercel.",
        link: "https://chilis-ecommerce-store-project.vercel.app/",
      },
      /*{
        title: "Project placeholder 3",
        description:
          "A short placeholder description of my third project. Three strong " +
          "projects are better than ten weak ones.",
        link: "#",
      },*/
    ],
  },

  // ---- Footer --------------------------------------------------------------
  footer: {
    note: "Built with Next.js + TypeScript.",
  },
};
