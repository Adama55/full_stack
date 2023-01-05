import { createContext, useContext, useMemo, useState } from "react";
import { getPosts, insertPosts } from "../service"

const AppContext = createContext();
const {Provider} = AppContext;

const AppProvider = ({children}) =>{
    const [posts, setPosts] = useState([])

    const fecthPosts =() => {
        getPosts().then((setPosts))
    }

    const addPosts = (body) => {
        insertPosts(body).then(setPosts)
    }

    const value = useMemo (() => {
        return {posts, 
            fecthPosts,
            addPosts
        }
    }, [posts])

    return <Provider value = {value}> {children}</Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export default AppProvider