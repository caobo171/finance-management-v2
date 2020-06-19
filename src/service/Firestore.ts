import firebase from "firebase";


interface PairObject {
  [key: string]: any
}
type Query = firebase.firestore.Query<firebase.firestore.DocumentData>;

class Firestore {
	__firestore: firebase.firestore.Firestore | null = null;

	init() {
		this.__firestore = firebase.firestore();
    }
    
    get instance(){
        return this.__firestore;
    }

	async updateData({
        collection,
        updateObject,
		id,
	}: {
		collection: string;
		id: string;
		updateObject: PairObject;
	}) {
		//@ts-ignore
		const ref = this.__firestore.collection(collection).doc(id);

		return this.__firestore
			?.runTransaction(async (transaction) => {
				return transaction.get(ref).then(async (doc) => {
					if (!doc.exists) {
						throw "Document does not exist";
					}

					await transaction.update(ref, updateObject);

					return {
						...doc.data(),
						...updateObject
					};
				});
			})
			.catch((err) => null);
	}

	updateNumberData({
		collection,
		id,
		field,
		updateValue,
	}: {
		collection: string;
		id: string;
		field: string;
		updateValue: number;
	}) {
		//@ts-ignore
		const ref = this.__firestore.collection(collection).doc(id);

		return this.__firestore
			?.runTransaction(async (transaction) => {
				return transaction.get(ref).then(async (doc) => {
					if (!doc.exists) {
						throw "Document does not exist";
					}
					const data = doc.data();
					var newData = (data ? data[field] : 0) + updateValue;

					await transaction.update(ref, {
						[field]: newData,
					});

					return {
						...doc.data(),
						[field]: newData,
					};
				});
			})
			.catch((err) => null);
	}

	addData({
		collection,
		id,
		value,
	}: {
		collection: string;
		id: string;
		value: any;
	}) {
		//@ts-ignore
		const ref = this.__firestore.collection(collection).doc(id);

		return this.__firestore
			?.runTransaction(async (transaction) => {
				return transaction.get(ref).then(async (doc) => {
					if (doc.exists) {
						return "Document existed ";
					}

					await transaction.set(ref, value);

					return value;
				});
			})
			.then((err) => null);
	}

	checkExistById({ collection, id }: { collection: string; id: string }) {
		//@ts-ignore
		const ref = this.__firestore.collection(collection).doc(id);
		return ref.get().then(doc => {
            if(doc.exists){
                return true
            }
            return false
        }).catch(err=> false);
    }
    

    async getDataByField ({collection, compareObject}: {collection:string, compareObject: PairObject}) {
        //@ts-ignore 
        let ref = this.__firestore.collection(collection);
        const keys = Object.keys(compareObject);

        let query: Query | null = null
        keys.forEach(key=>{
            query  = (query ? query : ref ).where(key, "==" ,compareObject[key])
        })

        if(query !== null){
            return await (query as Query)
            .get().then(doc=> {
                return doc.docs.map(item => ({
                    id: item.id,
                    ... item.data()
                }))
            }).catch(err=> []);
        }else{
            return [];
        }
    }


    async getAllDataInCollection<ResponseType>( {collection}: {collection: string} ): Promise<ResponseType> {
        //@ts-ignore 
        let ref = this.__firestore.collection(collection);

        //@ts-ignore
        return ref.get().then(doc=> {
            return doc.docs.map(item => ({
                id: item.id,
                ... item.data()
            }))
        }).catch(err=> []) 
    }
}

export const KEYS = {
    CREDENTIALS: "credentials",
    HOMESTAY: "homestays"
};

export default new Firestore();
