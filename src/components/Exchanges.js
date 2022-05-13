import React from "react";
import { Col, Row, Typography, Avatar } from "antd";

import Loader from "./Loader";
import { useGetExchangesQuery } from "../services/cryptoApi";
import millify from "millify";

const { Text } = Typography;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  const exchangesList = data?.data?.exchanges;

  // console.log(exchangesList);

  if (isFetching) return <Loader />;
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
      </Row>
      <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24} key={exchange.uuid}>
            <Row key={exchange.uuid}>
              <Col span={6}>
                <Text>
                  <strong>{exchange.rank}.</strong>
                </Text>
                <Avatar className="exchange-image" src={exchange.iconUrl} />
                <Text>
                  <strong>{exchange.name}</strong>
                </Text>
              </Col>
              <Col span={6}>${millify(exchange?.["24hVolume"])}</Col>
              <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
            </Row>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
