import CPRMain from '@/components/CPR';
import Encourage from '@/components/Encouraging';
import HomeBanner from '@/components/HomeBanner';
import HomeBannerAds from '@/components/HomeBannerAds';
import HomeBulletin from '@/components/HomeBulletin';
import HomeVideoArticles from '@/components/HomeVideoArticles';
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';

const Home = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <HomeBanner />
      <HomeBannerAds />
      <HomeBulletin dictionaries={dictionaries} />
      <Encourage dictionaries={dictionaries}/>
      <CPRMain dictionaries={dictionaries}/>
      <HomeVideoArticles dictionaries={dictionaries}/>
    </div>
  );
};

export default Home;
