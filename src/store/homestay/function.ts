import firebase from "firebase";
import HomeStay, { FAKE_IMAGE_HOMESTAY } from "./types";
import store from "store/store";
import * as actions from "./actions";
import Firestore, { KEYS } from "service/Firestore";

export const DEFAULT_ITEM_IMAGE =
	"https://primerize.stanford.edu/site_media/images/fg_question.png";

export const FAKE_HOMESTAY: HomeStay = {
	id: "-1",
	name: "Fake HomeStay",
	description: "this is a fake homestay",
	photoUrl: FAKE_IMAGE_HOMESTAY,
};

export const addHomestay = async (homestay: HomeStay, storex = store) => {
	const { id, ...rest } = homestay;
	const res = await firebase.firestore().collection(KEYS.HOMESTAY).add(rest);

	return res.id;
};

export const getAllHomeStays = async (storex = store) => {
	const homeStays = await Firestore.getAllDataInCollection<HomeStay[]>({
		collection: KEYS.HOMESTAY,
    });

    let homeStay: 
    homeStays.fo
    
    return storex.dispatch(actions.getHomeStays(homeStays));
};

export const updateHomeStays = async (
	homestays: Map<string, HomeStay>,
	storex = store
) => {
	return storex.dispatch(actions.getHomeStays(homestays));
};
