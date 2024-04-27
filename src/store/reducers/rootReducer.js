const initState = {
    title: [
        {id: 1, course: 'IT'},
        {id: 2, course: 'Maketing'},
        {id: 3, course: 'Sale'},
        {id: 4, course: "Teacher"}
    ],
    editTitle: {}
} 

const rootReducer = (state = initState, action) => {

    console.log('action', action)
 switch (action.type) {

    case "DELETE_USER":
        let title = state.title
        console.log(title)
              title = title.filter((item)=>{
                return item.id !== action.payload.id
            })
        state = {...state, title }
        return state

    case "EDIT_TITLE":
        let {editTitle} = state
        let editTitleCopy = editTitle;
        editTitleCopy = action.payload
        editTitle = editTitleCopy
       console.log('action.payload',action.payload)
        let isEmptyObj =  Object.keys(editTitle).length === 0
        state = {...state, editTitle }
        //save

        // if (isEmptyObj === false && action.payload.id === editTitle.id){
            //Find index of specific object using findIndex method.    
let objIndex = state.title.findIndex(item => item.id == action.payload.id);

//Log object to Console.
console.log("Before update: ", state.title[objIndex])

//Update object's name property.
console.log('pp',editTitle)
state.title[objIndex].course =  editTitle.course
let titleCopy = [...state.title]
        console.log('titleCopy',titleCopy)
        
        console.log('editTitleCopy',editTitleCopy)
        console.log('isEmptyObj',isEmptyObj)
        
    return {
        ...state, title: titleCopy
    }
        

        case "SAVE_TITLE":
            return { ...state, editTitle: {} }; // Trả về editTitle rỗng sau khi lưu
    
        case "CREATE_TITLE":
            console.log('ac', action)
            let getTitle = [...state.title, action.payload]
        return {
            ...state, title: getTitle
        }

    default:
        return state;
}

    
}

export default (rootReducer);