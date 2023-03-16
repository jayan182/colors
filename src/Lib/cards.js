import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAndroid, faMobileAndroidAlt  } from '@fortawesome/free-solid-svg-icons';

const CardsList = [
    {
        "icon": <FontAwesomeIcon icon={faMobileAndroidAlt} style={{width: 60, height: 60}} />,
        "name": "ios App",
        "title": "Create, browse and save palettes on the go.",
        "action": "View on the App Store",
        "is_new": false,
        "actionColor": "#0000FF",
        "backgroundColor": "#00BFFF"
    },
    {
        "icon": <FontAwesomeIcon icon={faMobileAndroid} style={{width: 60, height: 60}} />,
        "name": "Android App",
        "title": "Thousands of palettes in your pocket.",
        "action": "View on the Play Store",
        "is_new": false,
        "actionColor": "#1AA260",
        "backgroundColor": "#0AFFFF"
    },
    {
        "icon": <FontAwesomeIcon icon={faMobileAndroid} style={{width: 60, height: 60}} />,
        "name": "Figma Plugin",
        "title": "All palettes right in your workspace.",
        "action": "Install now",
        "is_new": false,
        "actionColor": "#C88141",
        "backgroundColor": "#F8F8FF"
    },
    {
        "icon": <FontAwesomeIcon icon={faMobileAndroid} style={{width: 60, height: 60}} />,
        "name": "Chrome Extension",
        "title": "Get and edit a palette every new tab.",
        "action": "Add to Chrome",
        "is_new": false,
        "actionColor": "#B048B5",
        "backgroundColor": "#FF77FF"
    },
    {
        "icon": <FontAwesomeIcon icon={faMobileAndroid} style={{width: 60, height: 60}} />,
        "name": "Adobe Extension",
        "title": "Use Coolors with your favorite tools.",
        "action": "Download",
        "is_new": true,
        "actionColor": "#513B1C",
        "backgroundColor": "#D291BC"
    }
];

export default CardsList;