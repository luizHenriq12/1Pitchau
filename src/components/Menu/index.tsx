import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { LeftContainer, NavbarContainer, NavbarInnerContainer, NavbarLinkExtended, OpenLinksButton, RightContainer, NavbarLinkContainer, NavbarLink, NavbarExtendedContainer } from "./styles";
import axios, { AxiosError } from "axios";

interface IDataMenu {
    id: number;
    categoria: string;
}
export const Menu = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [dataMenu, setDataMenu] = useState<Array<IDataMenu>>([])

    useEffect(() => {

        axios.get('http://localhost:3000/categorias')
            .then((res) => {
                setDataMenu(res.data)
            })
            .catch((err: AxiosError) => {
                console.log(err)
            })
            
    }, [])

    return (
      <>
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((value) => !value)
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                        </OpenLinksButton>

                        <NavbarLinkExtended
                            style={{
                                fontWeight: 'bold',
                                color: '#fff',
                            }}
                            to="/"
                        >
                            1Pitchau
                        </NavbarLinkExtended>

                        <NavbarLink to={'/'}>Home</NavbarLink>
                        {
                            dataMenu.map((menu) => {
                                return(
                                    <NavbarLink 
                                        key={menu.id}
                                        to={'/categoria/' + menu.id}
                                    >
                                        {menu.categoria}
                                    </NavbarLink>
                                )
                            })
                        }

                    </NavbarLinkContainer>
                </LeftContainer>

                <RightContainer>
                    <NavbarLinkExtended
                        to="/carrinho"
                    >
                        <FaShoppingCart
                            size={22}
                        />
                    </NavbarLinkExtended>
                </RightContainer>
            </NavbarInnerContainer>

            {
                extendNavbar && (
                    <NavbarExtendedContainer>
                        <NavbarLinkExtended to={'/'}>
                            Home
                        </NavbarLinkExtended>
                        {
                            dataMenu.map((menu) => {
                                return(
                                    <NavbarLinkExtended 
                                        key={menu.id}
                                        to={'/categoria/' + menu.id}
                                    >
                                        {menu.categoria}
                                    </NavbarLinkExtended>
                                )
                            })
                        }
                    </NavbarExtendedContainer>
                )
            }

        </NavbarContainer>
      </>
    )
  }
  