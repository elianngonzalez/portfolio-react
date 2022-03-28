import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import { GetImg, GetRepos } from '../utils/API_github';

const SectionThree = () => {
    const theme = useMantineTheme();
    const [repos, setRepos] = useState([]);
    const [img, setImg] = useState('');

    useEffect(
        () => {

        GetRepos().then(data => {
            console.log(data);
            if (data.length > 0) {
                setRepos(data);
            }}
        )

    }, []);

    return (
        <section id="section-two">
            <Container>
                <Text color="black" align="center">
                    <Title order={1} style={{ marginBottom: 30 }}>Some of my proyects</Title>
                </Text>

                <Grid>
                    
{/*      <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card shadow="sm" padding="lg" style={{ height: '100%' }}>
                            <Card.Section>
                                <Image src={require('../Images/card3.jpg')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Major roles of Dennis Farina</Text>
                                <Badge color="red" variant="light">
                                    Cool badge 3
                                </Badge>
                            </Group>

                            <Text size="sm">
                                Discover the major roles of Dennis Farina and something else!
                            </Text>

                            <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                Find out
                            </Button>
                        </Card>
                    </Grid.Col> */}
                </Grid>

            </Container>
        </section>
    );
};

export default SectionThree;