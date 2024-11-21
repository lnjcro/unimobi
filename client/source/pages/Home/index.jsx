import React, { Fragment } from "react";
import Card from "../../components/Card/CardComponent";
import Banner from "../../components/Banner/BannerComponent";
import { Header, Wrapper } from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import Api from "../../services/Api";

const Home = () => {
  const [unimobi, setUnimobi] = useState([]);
  useEffect(() => {
    Api.get('/listproperty')
      .then((response) => {
        setUnimobi(response.data)
      })
      .catch(() => {
        console.log("Erro: Erro no sistema");
      })
  }, [])
  return (
    <Fragment>
      <Banner />
      <Header>
        <h2>Propriedades disponíveis</h2>
      </Header>
      <Wrapper>
        {unimobi.map(items => (
          <Card
            key={items.id}
            thumb={items.thumb}
            tipo={items.tipo}
            endereco={items.endereco}
            valor={items.valor}
            slug={items.slug}
          />
        ))}
      </Wrapper>
    </Fragment>
  )
}

export default Home;