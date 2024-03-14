import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './commonStyles.css';

export default function DetailsModel(props) {
    const {
        characterDetails,
        imageUrl,
        open,
        setOpen
    } = props;

    const { name, height, gender } = characterDetails;

    const handleClose = () => {
        setOpen(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <img src={imageUrl} alt={name} />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography variant="overline" gutterBottom>
                                Name
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography gutterBottom variant="h6" component="div" align='left'>
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="overline" gutterBottom>
                                Gender
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography gutterBottom variant="h6" component="div" align='left'>
                                {gender}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="overline" gutterBottom>
                                Height
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography gutterBottom variant="h6" component="div" align='left'>
                                {height}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Modal>
  );
}