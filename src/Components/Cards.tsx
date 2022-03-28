import { useMantineTheme, Text, Grid, Image, Badge, Button, Group, Card } from '@mantine/core';
import { useEffect, useState } from 'react';
import { GetImg } from '../utils/API_github';

type PropsCard = {
    name: string;
    description: string;
    url: string;
}

type Img ={
    download_url: string;
}

export function CardsRepo ({name , url , description } : PropsCard) {
    const theme = useMantineTheme();
    const [img , setImg] = useState('');

    useEffect(() => {
        console.log('Card rendered')
        console.log(name + ' ' + url)
        console.log(img)
        GetImg(name).then(data => {
            console.log(data.download_url);
            if (data.length > 0) {
                setImg(data.download_url);
            }})
    }, []);

    return (
        <>
        <Grid>
            <Grid.Col xs={12} sm={4} md={4} lg={4}>
                <Card shadow="sm" padding="lg" style={{ height: '100%' }}>
                    <Card.Section>
                        <Image src={''} alt={'sample1'} />
                    </Card.Section>

                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Text weight={500}>{name}</Text>
                        <Badge color="green" variant="light">
                            Cool badge 2
                        </Badge>
                    </Group>

                    <Text size="sm">
                        {description}
                    </Text>

                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }} onClick={() => redirectToLink(url)}>
                        Find repository
                    </Button>
                </Card>
            </Grid.Col>
        </Grid>
        </ >
    )
}

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};