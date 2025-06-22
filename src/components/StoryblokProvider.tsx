"use client";

import type { PropsWithChildren } from "react";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { checkoutExclusivo } from "./checkoutExclusivo/checkoutExclusivo";
import { metaTags } from "./metaTags/metaTags";
import { banner } from "./banner/banner";
import { showroom } from "./showroom/showroom";
import { tituloOfertas } from "./tituloOfertas/tituloOfertas";
import { detailsDrawer } from "./detailsDrawer/detailsDrawer";
import { offerTabs } from "./offerTabs/offerTabs";
import { appDownload } from "./appDownload/appDownload";
import { videoChannel } from "./videoChannel/videoChannel";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: { 
    "checkout-exclusivo": checkoutExclusivo,
    meta_tags: metaTags,
    banner: banner,
    showroom: showroom,
    titulo_ofertas: tituloOfertas,
    details_drawer: detailsDrawer,
    offer_tabs: offerTabs,
    app_download: appDownload,
    video_channel: videoChannel,
  },
  enableFallbackComponent: true
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
}