import { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 200,
    },
    {
      name: "excerpt",
      type: "textarea",
      maxLength: 400,
    },
    {
      name: "content",
      type: "richText",
      //editor: slateEditor(),  // Rich text editor for non-devs
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeChange: [
          ({ data, originalDoc }) => {
            if (data?.title && !data.slug) {
              const baseSlug = data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
              return originalDoc?.id
                ? `${baseSlug}-${originalDoc.id.slice(-6)}`
                : baseSlug;
            }
            return data?.slug;
          },
        ],
      },
    },

    {
      name: "cloudinaryUrl",
      type: "text",
      required: true,
      admin: {
        description:
          "Paste your Cloudinary image URL here (e.g., https://res.cloudinary.com/your-cloud/image/upload/v1234567890/your-image.jpg)",
      },
      validate: (url: any) => {
        if (!url.startsWith("https://res.cloudinary.com/")) {
          return "Must be a valid Cloudinary URL";
        }
        return true;
      },
    },

    {
      name: "publishedDate",
      type: "date",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required:false
    },
  ],
};
