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
        name: "Contact Us",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/contact",
        subMenu: [
            {
                name: "List",
                icon: <FontAwesomeIcon icon={faCheckSquare} />,
                path: "/contact/list",
                subMenu: [] 
            },
            {
                name: "Create",
                icon: <FontAwesomeIcon icon={faCheckSquare} />,
                path: "/contact/create",
                subMenu: [] 
            },
            {
                name: "Update",
                icon: <FontAwesomeIcon icon={faCheckSquare} />,
                path: "/contact/update",
                subMenu: [] 
            },
            {
                name: "Delete",
                icon: <FontAwesomeIcon icon={faCheckSquare} />,
                path: "/contact/delete",
                subMenu: [] 
            }
        ]
    }
];

export default menus;