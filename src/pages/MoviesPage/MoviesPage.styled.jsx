import { NavLink } from "react-router-dom"
import styled from "styled-components"


export const Container = styled.section`
padding: 0px 20px
`
export const List = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap:5px;
`
export const Link = styled(NavLink)`
text-decoration:none;
color: black;
&:hover{
    color: orange;
}
`