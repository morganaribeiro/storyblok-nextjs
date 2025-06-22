import { appDownload } from '@/components/appDownload/appDownload';
import { banner } from '@/components/banner/banner';
import { checkoutExclusivo } from '@/components/checkoutExclusivo/checkoutExclusivo';
import { detailsDrawer } from '@/components/detailsDrawer/detailsDrawer';
import { metaTags } from '@/components/metaTags/metaTags';
import { offerTabs } from '@/components/offerTabs/offerTabs';
import { showroom } from '@/components/showroom/showroom';
import { tituloOfertas } from '@/components/tituloOfertas/tituloOfertas';
import { videoChannel } from '@/components/videoChannel/videoChannel';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
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
	apiOptions: {
		region: 'eu', // REGION DEFAULT
	},
});