'use client'

import { Page } from "@/components/Page";
import { initData, useSignal } from "@telegram-apps/sdk-react";
import { Avatar, Badge, Cell, Info, List} from "@telegram-apps/telegram-ui";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import React from "react";
import { WhereToVote, Reviews, AddLocationAlt } from "@mui/icons-material";

export default function Profile() {
    const initDataState = useSignal(initData.state);

    return (
        <Page>
            <SectionHeader large >
                <b>Профиль</b>
            </SectionHeader>
            <List>
                <Cell
                    before={<Avatar
                        size={48}
                        src={initDataState?.user?.photoUrl}
                    />}
                    subtitle={initDataState?.user?.firstName + ' ' + initDataState?.user?.lastName}
                    description={'id: ' + initDataState?.user?.id}
                    >
                    {initDataState?.user?.username}
                </Cell>
                <SectionHeader>
                <b>Статистика</b>
                </SectionHeader>
                <Cell   
                    after={<Badge type="number">11</Badge>}
                    before={<WhereToVote/>}>
                    {`Посещено локаций `}
                </Cell>
                <Cell   
                    after={<Badge type="number">3</Badge>}
                    before={<AddLocationAlt/>}>
                    {`Создано локаций `}
                </Cell>
                <Cell   
                    after={<Badge type="number">5</Badge>}
                    before={<Reviews/>}>
                    {`Оценено локаций `}
                </Cell>
                <SectionHeader>
                <b>Активность</b>
                </SectionHeader>
                <Cell
                    after={<Info subtitle="Получено" type="text">+50</Info>}
                    >
                    Бонусы
                </Cell>
            </List>
        </Page>
    );
}
