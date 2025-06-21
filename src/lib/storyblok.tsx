import { appDownload } from '@/components/appDownload';
import { banner } from '@/components/banner';
import { checkoutExclusivo } from '@/components/checkoutExclusivo';
import { detailsDrawer } from '@/components/detailsDrawer';
import { metaTags } from '@/components/metaTags';
import { offerTabs } from '@/components/offerTabs';
import { showroom } from '@/components/showroom';
import { tituloOfertas } from '@/components/tituloOfertas';
import { videoChannel } from '@/components/videoChannel';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_TOKEN,
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
	apiOptions: {
		region: 'eu', // SPACE DEFAULT
	},
});