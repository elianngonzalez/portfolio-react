import { useMantineTheme, Text, Grid, Image, Badge, Button, Group, Card } from '@mantine/core';
import { useEffect} from 'react';

type PropsCard = {
    name: string;
    description: string;
    url: string;
}


export function CardsRepo ({name , url , description } : PropsCard) {
    const theme = useMantineTheme();
    
    useEffect(
        () => {
            console.log(name);
        }
    )

    return (
        <>
        <Grid>
            <Grid.Col xs={12} sm={4} md={4} lg={4} style={{textAlign:'center'}}>
                <Card shadow="sm" padding="sm" style={{ height: '150px' , width: '200px' }}>
                    {/* <Card.Section>
                        <Image src={''} alt={'sample1'} />
                    </Card.Section> */}

                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm ,justifyContent:'center'}}>
                        <Text weight={500} >{name}</Text>
                    </Group>

                    <Text size="sm">
                        {description}
                    </Text>

                    <Button variant="light" color="blue" fullWidth style={{ alignContent:'center' }} onClick={() => redirectToLink(url)}>
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