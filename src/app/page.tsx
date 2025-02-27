'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Page } from '@/components/Page';
import Map from '@/components/Map';


export default function Home() {
  const t = useTranslations('i18n');

  return (
    <Page back={false}>
      <Map/>
    </Page>
  );
}
