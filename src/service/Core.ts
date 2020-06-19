import Firestore from "./Firestore";
import { getUserList } from "store/user/function";
import { getAllHomeStays } from "store/homestay/function";


class Core {
	init() {

        Firestore.init();
        getUserList();
        getAllHomeStays();
    
    }
}

export default new Core();
