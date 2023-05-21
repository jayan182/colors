import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const menus = [
    {
        name: "Home",
        icon: <FontAwesomeIcon icon={faCoffee} />,
        path: "/home",
        subMenu: [],
        permissions: ["Admin", "Client"]
    },
    {
        name: "About",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/about",
        subMenu: [],
        permissions: ["Admin", "Client"]
    },
    {
        name: "Memo",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/memo",
        subMenu: [],
        permissions: ["Admin", "Client"]
    },
    {
        name: "Movie",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/movie",
        subMenu: [],
        permissions: ["Admin", "Client"]
    },
    {
        name: "Reducer",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/reducer",
        subMenu: [],
        permissions: ["Admin", "Client"]
    },
    {
        name: "Fruits",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/fruits",
        subMenu: [],
        permissions: ["Admin", "Client"]
    },
    {
        name: "Class Component",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/class_component",
        subMenu: [],
        permissions: ["Admin"]
    },
    {
        name: "Weather",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/weather",
        subMenu: [],
        permissions: ["Admin", "Client"]
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
                subMenu: [],
            },
            {
                name: "Create",
                icon: <FontAwesomeIcon icon={faCheckSquare} />,
                path: "/contacts/create",
                subMenu: [],
            }
        ],
        permissions: ["Admin"]
    }
];

export default menus;