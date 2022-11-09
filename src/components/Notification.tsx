import React from "react";
//import { useStoreActions, Action } from "easy-peasy";
import { useStoreActions } from "../store/index";
import { NotificationType } from "../store/index";
import "../styles/notification.css";
import { selectPhoto } from "../utils/selectPhoto";

type NotificationProps = {
  notification: NotificationType;
};

const Notification = ({ notification }: NotificationProps) => {
  const markAsRead = useStoreActions((actions) => actions.markRead);

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget as HTMLDivElement;
    console.log("toggle me!", target.dataset.id);
    markAsRead(Number(target.dataset.id));
  };
  return (
    <div
      onClick={clickHandler}
      data-id={notification.id}
      className={`notification-container ${
        notification.beenRead ? "read" : ""
      }`}
    >
      <div className="notification-image-div">
        <img src={selectPhoto(notification.name)} />
      </div>
      <div className="notification-writing">
        <p className="notification-p">
          <span className="notification-name">{notification.name} </span>
          <span className="notification-text">{notification.text} </span>
          {notification.subject && (
            <span className="notification-summary">{notification.subject}</span>
          )}
        </p>
        <p className="notification-time">{notification.timeSince}</p>
      </div>
    </div>
  );
};

export default Notification;
