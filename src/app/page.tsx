import HomeBanner from '@/components/HomeBanner';
import HomeBannerAds from '@/components/HomeBannerAds';
import HomeBulletin from '@/components/HomeBulletin';
import HomeVideoArticles from '@/components/HomeVideoArticles';

const Home = () => {
  return (
    <div>
      <HomeBanner />

      <HomeBannerAds />

      <HomeBulletin />

      <HomeVideoArticles />
    </div>
  );
};

export default Home;