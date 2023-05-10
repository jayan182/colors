import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const clientMenues = [
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
        name: "Fruits",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/fruits",
        subMenu: []
    },
    {
        name: "Weather",
        icon: <FontAwesomeIcon icon={faCheckSquare} />,
        path: "/weather",
        subMenu: []
    },
];

export default clientMenues;