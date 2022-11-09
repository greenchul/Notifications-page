import React from "react";
//import { useStoreActions, Action } from "easy-peasy";
import { useStoreActions } from "../store/index";
import { NotificationType } from "../store/index";
import "../styles/notification.css";

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
      <p>
        <span>{notification.name} </span>
        <span>{notification.text} </span>
        {notification.subject && <span>{notification.subject}</span>}
      </p>
    </div>
  );
};

export default Notification;
