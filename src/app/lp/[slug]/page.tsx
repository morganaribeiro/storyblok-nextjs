import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

const fetchLpPage = async (slug: string) => {
  const client = getStoryblokApi();
  const full_slug = `pme/empresas/lp/${slug}`;
  const response = await client.getStory(`${full_slug}`, {
    version: "draft"
  });
  console.log('response', response);
  return response.data.story;
};

type Props = {
  params: { slug: string };
};

async function LpPage ({ params }: Props) {
  const { slug } = params;

  try {
    const story = await fetchLpPage(slug);
    return <StoryblokStory story={story} />;
  } catch (error) {
    console.error('Erro ao buscar:', error);
    notFound();
  }
}

export default LpPage;