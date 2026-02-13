import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [credit, setCredit] = useState(false);
    const [image, setImage] = useState(false);
    const [resultImage, setResultImage] = useState(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate();

    const { getToken } = useAuth()
    const { isSignedIn } = useUser()
    const {openSignIn} = useClerk()   //helps to open a login popup
 
    const loadCreditsData = async () => {
        try {
            
            const token = await getToken()
            const {data} = await axios.get(backendUrl+'/api/user/credits',{headers:{token}} )
            if (data.success) {
                setCredit(data.credits)
                console.log(data.credits)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    //function for removing the bg from the image

    const removeBg = async (image) => {
        try {

            if(!isSignedIn) {
                return openSignIn()   //helps to open a login popup if user is not signned in.
            }
             
            setImage(image)   //if logged in we can directly check it form here
            setResultImage(false);

            navigate('/result');

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
        credit, setCredit,
        loadCreditsData,
        backendUrl,
        image, setImage,
        removeBg
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider