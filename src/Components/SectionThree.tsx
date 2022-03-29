import { Container, Text, Title, Grid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { GetRepos } from "../utils/GetRepos";
import { CardsRepo } from './Cards';

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

                <Grid style={{display:'grid' ,
                    gap:'20px',
                    padding:'10px' ,
                    gridTemplateColumns:'repeat(auto-fit, 200px )',
                    justifyContent:'center'}}>
                    <>{repos.map( (repo: ReposType) => (
                    <CardsRepo name={repo.name} url={repo.html_url} description={repo.description}/>
                    ))}</>
                </Grid>

            </Container>
        </section>
    );
};

export default SectionThree;