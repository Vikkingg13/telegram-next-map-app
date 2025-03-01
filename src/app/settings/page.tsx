import { Page } from "@/components/Page";
import { Cell, Switch } from "@telegram-apps/telegram-ui";

export default function Settings() {

    return (
        <Page>
            <Cell
            Component="label"
            after={<Switch defaultChecked />}
            description="Вы будете получать рассылки об обновлениях."
            multiline
            >
            Push-уведомления
            </Cell>
        </Page>
    );
}