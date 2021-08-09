import React, { useContext, useState } from 'react';
import { Button, InputBase, Paper, IconButton } from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from '@material-ui/core/styles';
import StoreApi from '../utils/StoreApi';

const useStyle = makeStyles((theme) => ({
    card:{
        width:'280px',
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
    },
    input: {
        margin: theme.spacing(1),
    },
    btnCard: {
        background: '#5AAC44',
        color:"#fff",
        "&:hover": {
        background: '#5AAC44'
        }
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    }
}));

export default function InputCard({setOpen, listId, type}) {

    const classes = useStyle(); 
    const {addMoreCard, addMoreList} = useContext(StoreApi);
    const [title, setTitle] = useState ('');
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };
    const handleBtnCard = () => {
        if (type === 'card'){
        addMoreCard(title, listId);
        setTitle('');
        setOpen(false);
        }
        else {
        addMoreList(title)
        setTitle('');
        setOpen(false);
        }
    };


    return (
        <div>
            <div>   
                <Paper className={classes.card}>
                    <InputBase 
                    onChange={handleOnChange}
                    multiline fullWidth
                    onBlur={()=> setOpen(false)}
                    inputProps={{className: classes.input}}
                    value={title}
                    placeholder={type === 'card'
                    ? "Добавить название карты..."
                    : "Добавить название листа..."} />
                </Paper>
            </div>    
            <div className={classes.confirm}>
                <Button 
                className={classes.btnCard} onClick={handleBtnCard}> 
                {type === 'card' 
                ? "Добавить карту" 
                : "Добавить лист"} 
                </Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    );
};
