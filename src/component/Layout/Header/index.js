import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

import {
    MyAppBar,
    MyToolbar,
    MyTitle,
    MyMenu,
    MyMenuItem,
    MyLink
} from './style/HeaderStyle';

const Header = ({ navigation }) => {
    const { pathname } = useLocation();

    return (
        <MyAppBar position="fixed">
            <MyToolbar>
                {navigation.title && <MyTitle variant="h6">{navigation.title}</MyTitle>}
                <MyMenu>
                    {
                        navigation.nav.map((element) => (
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

Header.propTypes = {
    navigation: PropTypes.shape({
        title: PropTypes.string,
        nav: PropTypes.arrayOf(PropTypes.shape({
            path: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
}

export default Header;
    