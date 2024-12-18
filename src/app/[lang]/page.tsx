import Encourage from '@/components/Encouraging';
import HomeBanner from '@/components/HomeBanner';
import HomeBannerAds from '@/components/HomeBannerAds';
import HomeBulletin from '@/components/HomeBulletin';
import HomeVideoArticles from '@/components/HomeVideoArticles';
import CPRMain from '@/components/CPR';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeBannerAds />
      <HomeBulletin />
      <Encourage />
      <CPRMain />
      <HomeVideoArticles />
    </div>
  );
};

export default Home;
