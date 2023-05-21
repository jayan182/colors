import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const clientMenues = [
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
        name: "Fruits",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/fruits",
        subMenu: [],
        permissions: ["Admin", "Client"]
    },
    {
        name: "Weather",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/weather",
        subMenu: [],
        permissions: ["Admin", "Client"]
    },
];

export default clientMenues;