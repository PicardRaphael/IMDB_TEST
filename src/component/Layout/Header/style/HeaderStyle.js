import { styled } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Link from '@material-ui/core/Link'
 
export const MyToolbar = styled(Toolbar)({
    flexGrow: 1
})

export const MyAppBar = styled(AppBar)({
    backgroundColor: '#032541'
})

export const MyTitle = styled(Typography)({
    flexGrow: 1
})

export const MyMenu = styled(MenuList)({
    display: 'flex',
})

export const MyMenuItem = styled(MenuItem)({
    '&.Mui-selected': {
        backgroundColor: 'transparent',
        '&>a': {
            color: '#ffffff' 
        },
        '&:hover': {
            backgroundColor: 'transparent'
        },
    },
    '&:hover': {
        backgroundColor: 'transparent'
    },
})

export const MyLink = styled(Link)({
    color: '#98a6b1',
    '&:hover': {
        color: '#ffffff',
        textDecoration: 'none'
    }
})