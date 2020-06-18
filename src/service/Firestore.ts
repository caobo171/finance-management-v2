import firebase from "firebase";
class Firestore {
    __firestore: firebase.firestore.Firestore | null = null;

    init(){
        this.__firestore = firebase.firestore();
    }
	

	async updateData(
		collection: string,
		id: string,
		field: string,
		value: any
	) {
        //@ts-ignore
		const ref = this.__firestore.collection(collection).doc(id);
        //@ts-ignore
        this.__firestore.runTransaction(async (transaction) => {
			return transaction.get(ref).then(async (doc) => {
				if (!doc.exists) {
					throw "Document does not exist";
                }
                
                console.log(doc , value)
                return await transaction.update(ref,{
                    password : value
                })
			});
		}).then(doc=> {
   
        }).catch(err=>{
            console.log(err);
        })
	}

	async updateNumberData(
		collection: string,
		id: string,
		field: string,
		updateValue: number
	) {
        //@ts-ignore
		const ref = this.__firestore.collection(collection).doc(id);
        //@ts-ignore
        this.__firestore.runTransaction(async (transaction) => {
			transaction.get(ref).then((doc) => {
				if (!doc.exists) {
					throw "Document does not exist";
				}
				const data = doc.data();
                var newData = (data ? data[field] : 0) + updateValue;
                
                transaction.update(ref,{
                    [field]: newData
                })
			});
		});
	}
}


export const KEYS = {
    CREDENTIALS : 'credentials'
}

export default new Firestore();
