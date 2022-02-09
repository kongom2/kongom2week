import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();
  const weekArr = ["일", "월", "화", "수", "목", "금", "토"];

  const weekDays = Object.keys(weekArr).map((day) => {
    let today = new Date().getDay();
    let dayIndex = today + parseInt(day);
    let days = dayIndex > 6 ? dayIndex - 7 : dayIndex;
    return weekArr[days];
  });

  const dayRate = weekDays.map((day) => {
    return {
      days: day,
      rate: Math.round(Math.random() * 4),
    };
  });

  return (
    <Container>
      <h2>내 일주일은?</h2>
      {dayRate.map((week, index) => {
        return (
          <Rate key={index}>
            <Day>{week.days}</Day>
            {Array.from([0, 1, 2, 3, 4], (index) => {
              return (
                <Circle
                  key={index}
                  style={{
                    backgroundColor: week.rate < index ? "#e1f1e7" : "#6eceda",
                  }}
                ></Circle>
              );
            })}
            <Arrow
              onClick={() => {
                history.push(`/rating/${week.days}`);
              }}
            >
              <i
                style={{ color: "#b57fb3" }}
                class="fas color:red fa-chevron-right fa-2x"
              ></i>
            </Arrow>
          </Rate>
        );
      })}
    </Container>
  );
};

const Day = styled.span`
  background-color: #f6b99d;
  padding: 5px 10px;
  border-radius: 10px 10px 0px 10px;
  color: white;
  margin: 0px 10px;
  box-shadow: 3px 3px 3px black;
`;
const Rate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Arrow = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 3px 3px 3px black;
  margin: 20px 10px;
  border: 2px solid black;
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
  justify-content: center;
  align-items: center;
`;
export default Main;
