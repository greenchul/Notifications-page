import Notification from "./Notification";
import { useStoreState } from "easy-peasy";
import { StoreType } from "../store/index";

const Notifications = () => {
  const notifications = useStoreState((state: StoreType) => {
    return state.notifications;
  });
  return (
    <div>
      {notifications.map((notification) => {
        return (
          <Notification notification={notification} key={notification.id} />
        );
      })}
    </div>
  );
};

export default Notifications;
