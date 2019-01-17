const initialState = {
    articles: [
        {
            title: "Lorem Ipsum-STORE",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ."

        },
        {
            title: "Lorem Ipsum -STORE",
            description: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

        }
    ]

}

export default (state = initialState, { type, payload }) => {

    
    switch (type) {

        

        case "ADD_ARTICLE": {
            //const {title,description}=payload;
            console.log("Payload",{articles:[...state.articles,payload]})
            console.log("state",state)
            
            return {...state, articles:[...state.articles,payload]}
        }
        case "UPDATE_ARTICLE": {
            return { ...state, ...payload }
        }

        default:
            return state
    }
}
