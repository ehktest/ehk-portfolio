import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const REACT_APP_SANITY_PORTFOLIO_PROJECT_ID =
  process.env.REACT_APP_SANITY_PORTFOLIO_PROJECT_ID;

const REACT_APP_SANITY_PORTFOLIO_PROJECT_TOKEN =
  process.env.REACT_APP_SANITY_PORTFOLIO_PROJECT_TOKEN;

export const client = sanityClient({
  projectId: REACT_APP_SANITY_PORTFOLIO_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-01",
  useCdn: true,
  token: REACT_APP_SANITY_PORTFOLIO_PROJECT_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
