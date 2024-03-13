import { Menu } from "../../components/Menu"
import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./styles"

export const Home = () => {

  return (
    <>
      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
        }}
      >
        <h2>Produtos em Destaque</h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <CardBody>
            <img src="https://m.media-amazon.com/images/I/81Sw-hOdbyL._AC_SL1500_.jpg" alt=""/>
            <Title>PenDrive Sansung</Title>
            <TitlePreco>80,00</TitlePreco>
            <TextPromo>10,90</TextPromo>
            <Button>
              <TextButton>Detalhes</TextButton>
            </Button>
          </CardBody>
        </div>
      </div>
    </>
  )
}
