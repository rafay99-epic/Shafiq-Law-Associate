import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,

  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "post",
        label: "Case Law",
        path: "/src/content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Article Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Article Description",
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false,
            ui: {
              component: "tags",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // Config File for Site
      {
        name: "config",
        label: "Site Configuration",
        path: "src/config/SiteConfig",
        format: "json",
        fields: [
          { name: "SITE_TITLE", label: "Site Title", type: "string" },
          {
            name: "SITE_DESCRIPTION",
            label: "Site Description",
            type: "string",
          },
          { name: "SITE_KEYWORDS", label: "Site Keywords", type: "string" },
          {
            name: "landingPageHeroImages",
            label: "Landing Page Hero Image",
            type: "image",
          },
          {
            name: "LandingPageIntroText",
            label: "Landing Page Intro Text",
            type: "string",
          },
          {
            name: "LandingPageSecondLineText",
            label: "Landing Page Second Line",
            type: "string",
          },
          {
            name: "organizationLogo",
            label: "Organization Logo",
            type: "image",
          },
          { name: "CEoImage", label: "CEO Image", type: "image" },
          { name: "EmailAdress", label: "Email Address", type: "string" },
          { name: "PhoneNumber01", label: "Phone Number 1", type: "string" },
          { name: "PhoneNumber02", label: "Phone Number 2", type: "string" },
          {
            name: "offices",
            label: "Offices",
            type: "object",
            list: true,
            fields: [
              { name: "name", label: "Office Name", type: "string" },
              { name: "address", label: "Office Address", type: "string" },
              { name: "phone", label: "Phone Number", type: "string" },
              { name: "hours", label: "Office Hours", type: "string" },
            ],
          },
          {
            name: "faq",
            label: "FAQ",
            type: "object",
            list: true,
            fields: [
              { name: "question", label: "Question", type: "string" },
              { name: "answer", label: "Answer", type: "string" },
            ],
          },
          {
            name: "pricingPlans",
            label: "Pricing Plans",
            type: "object",
            list: true,
            fields: [
              { name: "name", label: "Plan Name", type: "string" },
              { name: "monthly", label: "Monthly Price", type: "string" },
              { name: "yearly", label: "Yearly Price", type: "string" },
              {
                name: "features",
                label: "Features",
                type: "string",
                list: true,
              },
            ],
          },
          {
            name: "services",
            label: "Services",
            type: "object",
            list: true,
            fields: [
              { name: "title", label: "Service Title", type: "string" },
              {
                name: "description",
                label: "Service Description",
                type: "string",
              },
              { name: "icon", label: "Service Icon", type: "string" },
            ],
          },
          {
            name: "WhyChooseUs",
            label: "Why Choose Us",
            type: "object",
            list: true,
            fields: [
              { name: "icon", label: "Icon", type: "string" },
              { name: "title", label: "Title", type: "string" },
              { name: "description", label: "Description", type: "string" },
            ],
          },
        ],
      },
      // Feature Flag
      {
        name: "FeatureFlages",
        label: "Feature Flags",
        path: "src/config/FeatureFlag",
        format: "json",
        fields: [
          {
            name: "HomePage",
            label: "Home Page",
            type: "boolean",
          },
          {
            name: "HomePageComponent",
            label: "Home Page Components",
            type: "object",
            list: true,
            fields: [
              { name: "LandingPage", label: "Landing Page", type: "boolean" },
              { name: "WhyChooseUs", label: "Why Choose Us", type: "boolean" },
              { name: "FAQ", label: "FAQ", type: "boolean" },
              { name: "ContactUS", label: "ContactUS", type: "boolean" },
            ],
          },
          {
            name: "AboutUs",
            label: "About Us",
            type: "boolean",
          },
          {
            name: "AboutUsComponent",
            label: "About Us Components",
            type: "object",
            list: true,
            fields: [
              { name: "AboutHer", label: "About Her", type: "boolean" },
              { name: "CEOIntro", label: "CEO Introduction", type: "boolean" },
              { name: "CoreValues", label: "Core Values", type: "boolean" },
              { name: "CTA", label: "Call To Action", type: "boolean" },
            ],
          },
          { name: "Services", label: "Services", type: "boolean" },
          { name: "CaseLaw", label: "Case Law", type: "boolean" },
          { name: "ContactUS", label: "Contact Us", type: "boolean" },
          { name: "Pricing", label: "Pricing", type: "boolean" },
          { name: "Footer", label: "Footer", type: "boolean" },
          { name: "Header", label: "Header", type: "boolean" },
          { name: "PrivatePolicy", label: "Privacy Policy", type: "boolean" },
          {
            name: "TermsAndConditions",
            label: "Terms & Conditions",
            type: "boolean",
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: "",
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
