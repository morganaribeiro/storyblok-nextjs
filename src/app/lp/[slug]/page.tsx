import { getStoryblokVersion } from "@/lib/getStoryblokVersion";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

const fetchLpPage = async (slug: string) => {
  const client = getStoryblokApi();
  const full_slug = `pme/empresas/lp/${slug}`;
  const version = getStoryblokVersion();

  const response = await client.getStory(`${full_slug}`, {version});
  return response.data.story;
};

type Props = {
  params: Promise<{ slug: string }>;
};

async function LandingPage ({ params }: Props) {
  const { slug } = await params;

  try {
    const story = await fetchLpPage(slug);
    return <StoryblokStory story={story} />;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    notFound();
  }
}

export default LandingPage;