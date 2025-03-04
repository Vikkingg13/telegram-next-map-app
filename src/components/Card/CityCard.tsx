import { Card } from "@telegram-apps/telegram-ui";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import Link from "next/link";
import React from "react";

                
export default function CityCard({ country, city, pic }: { country: string, city: string, pic: string }) {
    return (
        <Card type="plain" style={{'marginTop': '20px'}}>
            <React.Fragment key=".0">
            <Link href={"/map"}>
            <CardChip readOnly >
            Выбрать
            </CardChip>
            </Link>
                <img
                alt="Dog"
                src={pic}
                style={{
                    display: 'block',
                    height: 200,
                    objectFit: 'cover',
                    width: 200
                }}
                />
                <CardCell
                readOnly
                subtitle={country}
                >
                {city}
                </CardCell>
            </React.Fragment>
        </Card>
    );
}