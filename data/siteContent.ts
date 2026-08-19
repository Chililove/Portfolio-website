// Site content: edit all the visible text here.

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
    github: "https://github.com/Chililove",
    linkedin: "https://www.linkedin.com/in/louise-lauenborg/",
  },

  // ---- Home page text ------------------------------------------------------
  home: {
    heading: "Hi, I'm Louise Chili! 👋",
    intro:
      "I'm a web and software developer based in Esbjerg, Denmark, who loves " +
      "turning ideas into real, working products. I build full-stack apps with " +
      "TypeScript, Next.js, and PostgreSQL, from an online store with Stripe " +
      "payments to a membership platform for a local music studio. I care about " +
      "clean code, thoughtful user experience, and shipping things people " +
      "actually use, and I'm looking for a team where I can keep growing.",
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
      "kinds of work and teams I'm most excited about, but I'm happy to hear " +
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
          "software. I like learning new tech and shipping real features.",
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
      "Fill out the form below to reach me and your message lands straight in " +
      "my inbox. You are also welcome to email me directly at " +
      "louiselauenborg@hotmail.com.",
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
        title: "Tiny Chili Store: full-stack e-commerce 🌶️",
        description:
          "A complete online store built with Next.js, TypeScript, and " +
          "PostgreSQL (Prisma). Browse products, add to a cart that persists " +
          "across visits, and pay securely via Stripe Checkout. A " +
          "signature-verified Stripe webhook records each order and updates " +
          "inventory. Deployed on Vercel.",
        link: "https://chilis-ecommerce-store-project.vercel.app/",
        repo: "https://github.com/Chililove/Chilis-ecommerce-store-project",
      },
      {
        title: "Blokart Booking System 🪁",
        description:
          "An overbooking-safe rental booking system for blokarts, built in " +
          "zero-dependency Node.js with a vanilla HTML, CSS, and JavaScript " +
          "frontend. The customer page and the in-store staff screen share one " +
          "server, so double-booking is impossible. Includes group orders, a " +
          "multilingual flow (Danish, German, English), notifications, Google " +
          "Calendar sync, and payments. Hosted on Render.",
        link: "https://blokart-bookingsystem.onrender.com/",
        repo: "https://github.com/Chililove/Blokart-bookingsystem",
      },
      {
        title: "Farveladen Membership Platform 🎶",
        description:
          "A membership system for a music studio association. Members sign in " +
          "with a passwordless magic link, accept the rules, pick a plan, and " +
          "register their dues, while an admin confirms payments and sees who " +
          "has lapsed. The live demo has a one-click \"Try as member\" and " +
          "\"Try as admin\" login so you can explore both sides without an " +
          "account. Built with Next.js, TypeScript, Prisma, Postgres, and " +
          "Auth.js.",
        link: "https://farveladens-membership-app.vercel.app",
        repo: "https://github.com/Chililove/Farveladens-Membership-app",
      },
      {
        title: "Farveladen Website 🎨",
        description:
          "The public website for Rytmisk Farvelade, a community music studio " +
          "association. It presents the place, what happens there, and how to " +
          "get involved, and it is built to connect to the membership platform " +
          "once that goes live. Built with Astro, TypeScript, and Tailwind CSS, " +
          "and hosted on Netlify.",
        link: "https://rytmiskfarveladeforening.netlify.app/",
        repo: "https://github.com/Chililove/Farveladens-Website",
      },
    ],
  },

  // ---- Footer --------------------------------------------------------------
  footer: {
    note: "Built with Next.js + TypeScript.",
  },
};
