import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const Rating = () => {
  const [rate, setRate] = useState(0);
  const history = useHistory();
  const params = useParams();

  return (
    <Container>
      <Title>
        <Day>{params.week}요일</Day> 평점 남기기
      </Title>
      <RatingBox>
        {Array.from([0, 1, 2, 3, 4], (index) => {
          return (
            <Circle
              key={index}
              style={{
                backgroundColor: rate < index ? "#e1f1e7" : "#6eceda",
              }}
              onClick={() => {
                setRate(index);
              }}
            ></Circle>
          );
        })}
      </RatingBox>
      <Button
        onClick={() => {
          history.push(`/`);
        }}
      >
        평점남기기
      </Button>
    </Container>
  );
};
const Title = styled.h2`
  margin: 80px 0 30px 0;
`;
const Day = styled.span`
  background-color: #f6b99d;
  padding: 5px 10px;
  border-radius: 10px 10px 0px 10px;
  color: white;
  box-shadow: 3px 3px 3px black;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 3px 3px 3px black;
  margin: 20px 10px;
  border: 2px solid black;
  cursor: pointer;
`;
const RatingBox = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 40%;
  background-color: #b57fb3;
  box-shadow: 3px 3px 3px black;
  margin: 30px;
  border: none;
  border-radius: 10px 10px 0px 10px;
  padding: 1rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  background-color: #e1f1e7;
  box-shadow: 15px 15px 5px #edeef0;
  font-size: 20px;
  border: 1px solid #edeef0;
  border-radius: 50px;
  margin: 10vh auto;
  max-width: 500px;
  min-width: 300px;
  width: 60vw;
  height: 80vh;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
`;
export default Rating;
