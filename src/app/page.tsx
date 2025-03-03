'use client'

import { Section, Cell, Image, List, Navigation, Button, InlineButtons, Avatar } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Page } from '@/components/Page';
import SentimentSatisfiedAlt from '@mui/icons-material/SettingsAccessibilityOutlined'

import dynamic from 'next/dynamic';
import { InlineButtonsItem } from '@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem';
import { AccountCircle, EditLocation, EditLocationAlt, Settings, TravelExplore } from '@mui/icons-material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { initData, useSignal } from '@telegram-apps/sdk-react';
import { useState } from 'react';

const MapComponent = dynamic(
  () => import('@/components/Map/Map'), // импортируем как промис
  { ssr: false } // отключаем серверный рендеринг
);


export default function Home() {

  const [editMode, setMode] = useState(true);

  const handleSettingsClick = () => {
    window.location.href='/settings';
  };

  const handleProfileClick = () => {
    window.location.href='/profile';
  };

  const handleModeClick = () => {
    setMode(!editMode);
  };

  return (
    <Page back={false}>
      <MapComponent/>
      <InlineButtons mode="plain">
        <InlineButtonsItem 
          text="Настройки"
          onClick={handleSettingsClick}>
          <Settings />
        </InlineButtonsItem>
        <InlineButtonsItem 
          text='Режим'
          onClick={handleModeClick}>
          { editMode
          ? <TravelExplore/>
          : <EditLocationAlt/>
          }
        </InlineButtonsItem>
        <InlineButtonsItem text='Профиль' 
          onClick={handleProfileClick}>
          <AccountCircle/>
        </InlineButtonsItem>
    </InlineButtons>
    </Page>
  );
}
