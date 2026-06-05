// =============================================================================
//  SITE CONTENT  —  EDIT YOUR TEXT HERE
// =============================================================================
//
//  This is the ONE file you change to update almost all the words on your site.
//  You do NOT need to touch the page code to change text. Just edit the
//  values inside the quotation marks below, save the file, and the website
//  updates automatically.
//
//  Tip: only change the text INSIDE the "quotes". Keep the names on the left
//  (like `name:`, `tagline:`) exactly as they are.
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
        title: "Project placeholder 1",
        description:
          "A short placeholder description of my first project. Explain the " +
          "problem it solved and the tech you used.",
        link: "#",
      },
      {
        title: "Project placeholder 2",
        description:
          "A short placeholder description of my second project. Replace this " +
          "with real details when ready.",
        link: "#",
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
