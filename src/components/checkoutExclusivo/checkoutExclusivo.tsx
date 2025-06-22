import { SbBlokData, StoryblokServerComponent } from "@storyblok/react/rsc";

export const checkoutExclusivo = ({ blok }: { blok: { body: SbBlokData[] } }) => {  
  return (
    <main>
			{blok.body.map((childBlok: SbBlokData) => (
				<StoryblokServerComponent blok={childBlok} key={childBlok._uid} />
			))}
		</main>
  );
};