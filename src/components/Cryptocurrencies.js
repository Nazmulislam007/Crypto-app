import { Card, Col, Input, Row } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const [searchItem, setSearchItem] = useState("");
  const count = simplified ? 8 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setCryptos(filterData);
  }, [cryptosList, searchItem]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                hoverable
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className={`crypto-image`}
                    src={currency.iconUrl}
                    alt={currency.name}
                  />
                }
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
