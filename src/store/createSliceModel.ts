import { createSlice, PayloadAction , SliceCaseReducers} from "@reduxjs/toolkit";

type GenericType<T> = T & {id: string};

type Model<T> = {
	byId: Record<string, T>;
};

const createSliceModel = <T>(name: string, initialState: Model<T>, object?: SliceCaseReducers<typeof initialState>) => {
	const slice =  createSlice({
		name,
		initialState,
		reducers: {
			bulkAdd: (state, action: PayloadAction<Model<T>['byId']>) => ({ 
                ...state,
                byId: {
                    ...(state.byId as Model<T>['byId']),
                    ... action.payload
                }
            }),

            add: (state, action: PayloadAction<GenericType<T>>) => ({
                ...state,
                byId: {
                    ...(state.byId as Model<T>['byId']),
                    [action.payload.id]: action.payload
                }
            }),

            update:(state, action: PayloadAction<T>) => ({
                ...state,
                byId: {
                    ...(state.byId as Model<T>['byId']),

                    //@ts-ignore
                    [action.payload.id]: action.payload
                }
            }),

            remove: (state,action: PayloadAction<string>) => {
                const {[action.payload]: willBeRemoved, ... remain} = state.byId;
                return {
                    ...state,
                    byId: remain as Model<T>['byId']
                }
            },
            
            ...object
            
		},
    });
    
    return {
        slice
    }
};

export default createSliceModel;
