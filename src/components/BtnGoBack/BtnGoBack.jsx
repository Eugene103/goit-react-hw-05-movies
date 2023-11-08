import { Link } from "react-router-dom"
import { Button } from "./BtnGoBack.styled";

export const BtnGoBack = ({ to = `/`, children }) => {
    return (
        <Link to={to}><Button>Go back</Button>
            {children}
        </Link>
        
    )
}