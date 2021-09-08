import {
    MyAppBar,
    MyToolbar,
    MyTitle,
    MyMenu,
    MyMenuItem,
    MyLink
} from './style/HeaderStyle';
import navigation from '../../../config/navigation';
import { useLocation } from 'react-router';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <MyAppBar position="fixed">
            <MyToolbar>
                <MyTitle variant="h6">Movies</MyTitle>
                <MyMenu>
                    {
                        navigation.map((element) => (
                            <MyMenuItem key={element.key} selected={pathname === element.path}>
                                <MyLink href={element.path}>{element.label}</MyLink>
                            </MyMenuItem>
                        ))
                    }
                </MyMenu>
            </MyToolbar>
        </MyAppBar>
    )
}
    
export default Header;
    