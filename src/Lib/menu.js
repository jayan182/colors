import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const menus = [
    {
        name: "Home",
        icon: <FontAwesomeIcon icon={faCoffee} />,
        path: "/",
        subMenu: []
    },
    {
        name: "About",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/about",
        subMenu: []
    },
    {
        name: "Memo",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/memo",
        subMenu: []
    },
    {
        name: "Movie",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/movie",
        subMenu: []
    },
    {
        name: "Contact Us",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/contact",
        subMenu: [
            {
                name: "List",
                icon: <FontAwesomeIcon icon={faCheckSquare} />,
                path: "/contacts/list",
                subMenu: [] 
            },
            {
                name: "Create",
                icon: <FontAwesomeIcon icon={faCheckSquare} />,
                path: "/contacts/create",
                subMenu: [] 
            }
        ]
    }
];

export default menus;