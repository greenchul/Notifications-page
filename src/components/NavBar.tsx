import { useStoreState, useStoreActions } from "../store/index";
import "../styles/navbar.css";

const NavBar = () => {
  const unReadNotifications: number = useStoreState((state) => {
    const unread = state.notifications.filter((notification) => {
      return notification.beenRead === false;
    });
    return unread.length;
  });

  const markAllRead = useStoreActions((actions) => actions.markAllRead);

  const clickHandler = () => {
    markAllRead();
  };
  return (
    <nav className="nav-container">
      <p>
        Notifications <span>{unReadNotifications}</span>{" "}
      </p>
      <button onClick={clickHandler}>Mark all as read</button>
    </nav>
  );
};

export default NavBar;
