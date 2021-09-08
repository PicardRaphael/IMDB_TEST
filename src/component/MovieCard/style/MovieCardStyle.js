import { styled } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const MyCard = styled(Card)({
    minHeight: '20.625rem',
    backgroundColor: '#2f355d',
})

export const MyCardMedia = styled(CardMedia)({
    width: '100%'
})

export const MyCardContent = styled(CardContent)({    
})

export const MyTitle = styled(Typography)(({
    color: '#c2c7d8'
}))
