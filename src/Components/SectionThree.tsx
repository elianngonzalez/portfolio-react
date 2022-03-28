import { Container, Text, Title, Grid } from '@mantine/core';
import { useEffect, useState } from 'react';
import {GetRepos } from '../utils/API_github';

//mover al hijo, osea la card
type ReposType ={
    name: string;
    description: string;
    html_url: string;
}

const SectionThree = () => {
    const [repos, setRepos] = useState([]);

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
                    <>{repos.map( (repo: ReposType) => (repo.name.concat(', ')))}</>
                </Grid>

            </Container>
        </section>
    );
};

export default SectionThree;