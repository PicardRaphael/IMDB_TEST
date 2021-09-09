import { styled } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export const MyCard = styled(Card)({
    height: '100%',
    backgroundColor: '#2f355d',
});

export const MyDivImg = styled(Box)({
});

export const MyCardMedia = styled(CardMedia)({
    width: '100%',
    height: '100%',
})

export const MyCardContent = styled(CardContent)({
    padding: 0,
    '&:last-child': {
        paddingBottom: 0
    },
})

export const MyTitle = styled(Typography)(({
    color: '#c2c7d8',
    padding: '0.938rem'
}))
