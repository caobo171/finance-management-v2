import * as firebase from "firebase";
import { User } from "./types";
import store from "store/store";
import CurrentUser from "service/CurrentUser";

import Crypto from "service/Crypto";
import Firestore, { KEYS } from "service/Firestore";

export const USERS_COLLECTION = "users";
export const CURRENT_USER_STORAGE_KEY = "@finance-user";

export const DEFAULT_USER_IMAGE =
	"https://xmindnet.s3.amazonaws.com/img/default-avatar-m5.png";

export const FAKE_USER: User = {
	displayName: "Fake User",
	id: "-1",
	photoURL: DEFAULT_USER_IMAGE,
	email: "fake@fake.com",
	role: "member",
	placeId: "-1",
};

