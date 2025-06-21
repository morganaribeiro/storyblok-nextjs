import { StoryblokComponent } from "@storyblok/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkoutExclusivo = ({ blok }: { blok: any }) => {
  // console.log('blok', blok.body);
  return (
    <div>
      <h1>{blok.title}</h1>
      <div>
        {blok.body?.map((blok: any, index: number) => (
          <StoryblokComponent blok={blok} key={index} />
        ))}
      </div>
    </div>
  );
};