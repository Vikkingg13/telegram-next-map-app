'use client'

import { Section, Cell, Image, List, Navigation, Button, InlineButtons, Avatar } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Page } from '@/components/Page';
import SentimentSatisfiedAlt from '@mui/icons-material/SettingsAccessibilityOutlined'

import dynamic from 'next/dynamic';
import { InlineButtonsItem } from '@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem';
import { Settings, TravelExplore } from '@mui/icons-material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { initData, useSignal } from '@telegram-apps/sdk-react';

const MapComponent = dynamic(
  () => import('@/components/Map/Map'), // импортируем как промис
  { ssr: false } // отключаем серверный рендеринг
);


export default function Home() {
  const t = useTranslations('i18n');
  const initDataState = useSignal(initData.state);

  return (
    <Page back={false}>
      <MapComponent/>
      <InlineButtons mode="plain">
        <InlineButtonsItem text="Настройки">
          <Settings />
        </InlineButtonsItem>
        <InlineButtonsItem text="Осматриваться">
        <TravelExplore/>
        </InlineButtonsItem>
        <InlineButtonsItem>
        <Avatar
          size={40}
          src={initDataState?.user?.photoUrl}
        />
        </InlineButtonsItem>
    </InlineButtons>
    </Page>
  );
}
