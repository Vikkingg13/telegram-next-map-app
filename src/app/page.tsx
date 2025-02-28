import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Page } from '@/components/Page';
import Map from '@/components/Map/Map';

import dynamic from 'next/dynamic';

const MapComponent = dynamic(
  () => import('@/components/Map/Map'), // импортируем как промис
  { ssr: false } // отключаем серверный рендеринг
);


export default function Home() {
  const t = useTranslations('i18n');

  return (
    <Page back={false}>
      <MapComponent/>
    </Page>
  );
}
