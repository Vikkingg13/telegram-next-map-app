'use client'

import { Page } from "@/components/Page";
import SimpleSlider from "@/components/Slider/SimpleSlider";
import { MyLocation } from "@mui/icons-material";
import { Button, Card, Info, List, Placeholder, Section } from "@telegram-apps/telegram-ui";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import React from "react";

export default function Home() {
    return (
        <Page>
            <Placeholder 
                header="Где будем гулять?"
                description="Используйте свою локацию или выберите город для отображения карты"> 
                <img 
                src="https://i.pinimg.com/originals/f9/0b/bb/f90bbbecefe44107f0352736015f0c17.gif"
                style={{
                    'borderRadius': "50%",
                    'height': '30%',
                    'width': '30%'
                }}/>
            </Placeholder>
            <div style={{'marginLeft': '40px', 'marginRight': '40px'}}>
                <List>
                <Button 
                    stretched
                    before={<MyLocation/>}
                    size="m"
                    >
                    Использовать моё местоположение
                </Button>
                <SimpleSlider></SimpleSlider>
            </List>
            </div>
        </Page>
    );
}