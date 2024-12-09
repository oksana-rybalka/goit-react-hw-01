import styles fro "./FriendListItem.module.css"
import PropTypes from "prop-types";
 
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={styles.card} >
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img className={styles.avatar} scr={avatar} alt={name} width="48"/>
            <p className={styles.name}></p>  
         </div >
        ); 
    };
    
FriendListItem.PropTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem