import { storyblokEditable } from "@storyblok/react";

type Blok = {
  _uid: string;
  title: string;
  text: string;
  active: boolean;
  contact: string;
  qr_code: {
    title: string;
    alt: string;
    filename: string;
  }
  link_ios: {
    url: string;
    target: string;
  }
  app_store: {
    title: string;
    alt: string;
    filename: string;
  }
};

type PropsBlok = {
  blok: Blok;
};

export const appDownload = ({ blok }: PropsBlok) => {
  return (
    <section {...storyblokEditable(blok)} key={blok._uid}>
      <>Conteúdo do bloco appDownload:</>
      <br/>
      {blok.title}
      <br/>
      {blok.text}
      <br/>
      {blok.active}
      <br/>
      {blok.contact}
      <br/>
      {blok.qr_code.title}
      {blok.qr_code.alt}
      {blok.qr_code.filename}
      <br/>
      {blok.link_ios.url}
      {blok.link_ios.target}
      <br/>
      {blok.app_store.title}
      {blok.app_store.alt}
      {blok.app_store.filename}
    </section>
  );
};