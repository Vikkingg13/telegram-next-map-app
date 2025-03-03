'use client'

import { Page } from "@/components/Page";
import { Call, Place } from "@mui/icons-material";
import { FileInput, Input, List, Section, Select, Textarea } from "@telegram-apps/telegram-ui";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";

export default function LocationEditor() {
    return (
        <Page>
            <Section header="Редактор локации">
                <List>
                <Input 
                    header="Название" 
                    placeholder='Кафе "Булочная"'/>
                <Select header="Тип">
                    <option>Кафе</option>
                    <option>Музей</option>
                    <option>Парк</option>
                    <option>Активный отдых</option>
                </Select>
                <Textarea 
                    header="Описание" 
                    placeholder="Уютное место с приятной лёгкой музыкой для общения за чаепитием"/>
                <FileInput
                    label="Добавьте несколько фото"
                    multiple
                    onChange={function noRefCheck(){}}/>
                 <Input 
                    before={<Place/>}
                    header="Адрес" 
                    placeholder="Тверской бульвар, 26А"/>
                <Input 
                    before={<Call/>}
                    header="Контакты" 
                    placeholder="+7 (499) 796-58-11"/>
                </List>
            </Section>
        </Page>
    );
}