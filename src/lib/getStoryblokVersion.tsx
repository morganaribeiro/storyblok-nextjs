export function getStoryblokVersion(): "draft" | "published" {
  const version = process.env.STORYBLOK_VERSION;

  if (version === "draft" || version === "published") {
    return version;
  }
  return "draft";
}