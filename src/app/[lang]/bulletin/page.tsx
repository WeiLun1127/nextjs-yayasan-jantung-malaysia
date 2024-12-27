import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import News from './News';

const Bulletin = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return <News dictionaries={dictionaries} />;
};

export default Bulletin;
