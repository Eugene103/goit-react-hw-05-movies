import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.section`
padding: 0px 20px;
box-shadow: 0px 5px 8px 13px rgba(34, 60, 80, 0.21);
`
export const List = styled.ul`
margin-top: 10px;
display: flex;
`
export const Image = styled.img`
width: 250px
`
export const FLexDiv = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap:10px;
margin-left:10px;
`
export const Item = styled.li`
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap:10px;
`
export const GenresDiv = styled.div`
display: flex
`
export const ListAddInform = styled.ul`
margin-top:20px;
box-shadow: 0px -10px 10px -9px rgba(34, 60, 80, 0.21);
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap:5px;
`
export const Link = styled(NavLink)`
text-decoration:none;
color: black;
&.active{
  color: orange;
}
&:hover, :focus{
  color: orange;
}
`