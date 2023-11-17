// libraries
import { NavLink, Outlet } from "react-router-dom";

// styles
import styles from "./account.module.css";

// constants
import { 
  LOGOUT_PAGE_ABSOLUTE_PATH, 
  HISTORY_PAGE_ABSOLUTE_PATH, 
  PROFILE_PAGE_ABSOLUTE_PATH,
} from "../../utils/constants";



function AccountLayout() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <NavLink 
          end
          to={PROFILE_PAGE_ABSOLUTE_PATH} 
          className={({ isActive }) => 
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          children={
            <p className={styles.text}>
              Профиль
            </p>            
          }
        />
        <NavLink 
          end
          to={HISTORY_PAGE_ABSOLUTE_PATH} 
          className={({ isActive }) => 
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          children={
            <p className={styles.text}>
              История заказов
            </p>            
          }
        />        
        <NavLink 
          to={LOGOUT_PAGE_ABSOLUTE_PATH} 
          className={styles.link}
          children={
            <p className={styles.text}>
              Выход
            </p>            
          }
        />             
      </aside>
      
      <Outlet />
      
    </div>
  );
};

export default AccountLayout;