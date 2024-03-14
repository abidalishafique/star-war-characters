import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './commonStyles.css';
import DetailsModel from './detailsModel';

export default function CharacterCard({characterDetails, specicesToColorMapping}) {
  const [imageUrl] = useState(`https://picsum.photos/200/150?t=${Date.now()}`)
  const { name, species } = characterDetails;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className='addTransition' style={{backgroundColor: species.length ? specicesToColorMapping[species[0]] : 'inherit'}}>
        <CardActionArea onClick={() => (setOpen(true))}>
          <CardMedia
            component="img"
            height="150"
            image={imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <DetailsModel 
        characterDetails={characterDetails}
        imageUrl={imageUrl}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}