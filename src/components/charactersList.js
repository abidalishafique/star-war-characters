import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CharacterCard from './characterCard';
import PaginationComponent from './pagination';
import './commonStyles.css';
import { getCharactersList } from '../api/getCharactersList';


const list = [1,2,3,4,5,6]

export default function StarWarCharacterList() {
    const [page, setPage] = useState(1);
    const totalNoOfPages = 15;

    const getCharacters = async() => {
        try {
            const response = await getCharactersList();
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCharacters()
    }, [])

  return (
        <>
            <Grid container spacing={1}>
            {list.map(() => {
                return (
                    <Grid item xs={4}>
                        <CharacterCard />
                    </Grid>
                );
            })}
            </Grid>
            <div className='paginationContainer'>
                <PaginationComponent page={page} setPage={setPage} totalNoOfPages={totalNoOfPages} />
            </div>
        </>
  );
}