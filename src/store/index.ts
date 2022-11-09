import { createStore, action, Action, createTypedHooks } from "easy-peasy";

export type NotificationType = {
  id: number;
  beenRead: boolean;
  name: string;
  text: string;
  subject: string | null;
  timeSince: string;
};

export type StoreType = {
  notifications: NotificationType[];
  markRead: Action<StoreType, number>;
  markAllRead: Action<StoreType>;
};

const model: StoreType = {
  notifications: [
    {
      id: 1,
      beenRead: false,
      name: "Mark Webber",
      text: "reacted to your recent post",
      subject: "My first tournament today!",
      timeSince: "1min ago",
    },
    {
      id: 2,
      beenRead: false,
      name: "Angela Gray",
      text: "followed you",
      subject: null,
      timeSince: "5min ago",
    },
    {
      id: 3,
      beenRead: false,
      name: "Jacob Thompson",
      text: "has joined your group",
      subject: "Chess Club",
      timeSince: "1 day ago",
    },
    {
      id: 4,
      beenRead: true,
      name: "Rizky Hasanuddin",
      text: "sent you a private message",
      subject: null,
      timeSince: "1 day ago",
    },
    {
      id: 5,
      beenRead: false,
      name: "Kimberly Smith",
      text: "commented on your picture",
      subject: null,
      timeSince: "1 week ago",
    },
    {
      id: 6,
      beenRead: false,
      name: "Nathan Peterson",
      text: "reacted to your post",
      subject: "5 end-game strategies to increase your win rate",
      timeSince: "2 weeks ago",
    },
    {
      id: 7,
      beenRead: false,
      name: "Anna Kim",
      text: "left the group",
      subject: "Chess Club",
      timeSince: "2 weeks ago",
    },
  ],
  markRead: action((state, payload) => {
    state.notifications.forEach((notification) => {
      if (notification.id === Number(payload)) {
        notification.beenRead = true;
      }
    });
  }),
  markAllRead: action((state) => {
    state.notifications.forEach((notification) => {
      notification.beenRead = true;
    });
  }),
};

export const store = createStore(model);

const typedHooks = createTypedHooks<StoreType>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
