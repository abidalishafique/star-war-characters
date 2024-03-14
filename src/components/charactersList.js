import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import CharacterCard from './characterCard';
import PaginationComponent from './pagination';
import './commonStyles.css';
import { getCharactersList } from '../api/getCharactersList';
import { getRandomColor } from '../utils/getRandomColor';

const pageSize = 10;

function StarWarCharacterList() {
    const [page, setPage] = useState(1);
    const [renderedCharactersList, setRenderedCharactersList] = useState([]);
    const [totalNoOfPages, setTotalNoOfPages] = useState(1);
    const [specicesToColorMapping, setSpecicesToColorMapping] = useState({});
    const [loading, setLoading] = useState(false);

    const getCharacters = async(pageNo) => {
        try {
            setLoading(true);
            const response = await getCharactersList(pageNo);
            const totalCount = response?.data?.count;
            setTotalNoOfPages(Math.ceil(totalCount / pageSize));
            setRenderedCharactersList(response.data.results);
            const tempMapping = {...specicesToColorMapping};
            for(const character of response.data.results) {
                if (character?.species?.length) {
                    if(!tempMapping[character.species[0]]) {
                        tempMapping[character.species[0]] = getRandomColor();
                    }
                }
            }
            setSpecicesToColorMapping({...tempMapping});
        } catch (err) {
            console.log(err);
            alert('Unable to fetch the records of star war characters!');
        } finally {
            setLoading(false);
        }
    }
    const onPageChange = (updatedPage) => {
        setPage(updatedPage);
    }

    useEffect(() => {
        getCharacters(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    if(loading) {
        return (
            <div className='alignLoader'>
                <CircularProgress
                    color="secondary"
                    fourColor={false}
                    variant="indeterminate"
                />
            </div>
        );  
    }
 
    return (
        <>
            <Grid container spacing={1}>
            {renderedCharactersList.map((character) => {
                return (
                    <Grid item xs={2}>
                        <CharacterCard key={character?.url} characterDetails={character} specicesToColorMapping={specicesToColorMapping} />
                    </Grid>
                );
            })}
            </Grid>
            <div className='paginationContainer'>
                <PaginationComponent page={page} setPage={onPageChange} totalNoOfPages={totalNoOfPages} />
            </div>
        </>
  );
}

export default StarWarCharacterList;