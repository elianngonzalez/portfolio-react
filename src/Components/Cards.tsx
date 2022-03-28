import { useMantineTheme, Text, Grid, Image, Badge, Button, Group, Card } from '@mantine/core';
import { useEffect, useState } from 'react';

type PropsCard = {
    repos: object;
}

export function CardsRepo (props : PropsCard) {
    const theme = useMantineTheme();
    const [img, setImg] = useState('');

    useEffect(() => {
        console.log('Card rendered')
    }, [])

    return (
        <>
        <Grid>
            <Grid.Col xs={12} sm={4} md={4} lg={4}>
                <Card shadow="sm" padding="lg" style={{ height: '100%' }}>
                    <Card.Section>
                        <Image src={require('../Images/card2.jfif')} alt={'sample1'} />
                    </Card.Section>

                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Text weight={500}>Career of Dennis Farina</Text>
                        <Badge color="green" variant="light">
                            Cool badge 2
                        </Badge>
                    </Group>

                    <Text size="sm">
                        Dennis Farina had a really great career with many opportunities!
                    </Text>

                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                        Find out
                    </Button>
                </Card>
            </Grid.Col>
        </Grid>
        </ >
    )
}
