import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineException,
  AiFillCheckSquare,
  AiFillCarryOut,
} from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import Component from "../../../components";
import "./index.css";
import { appColors } from "../../../res/colors";
import Fonts from "../../../res/fonts";
const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 18px;
  margin: 6px 8px;
  padding: 4px 6px;
  gap: 10px;
  background: #ecfffc;
  border-radius: 6px;
`;
export const CardBody = ({ item, formateDate, showWorkerList }) => {
  if (showWorkerList) {
    return (
      <div style={{ padding: 4 }}>
        {item.assignedWorkers.map((worker) => (
          <TaskContainer key={worker._id}>
            <Fonts.LightFont>
              {worker.name} ({worker.roles})
            </Fonts.LightFont>
          </TaskContainer>
        ))}
      </div>
    );
  }
  return (
    <div style={{ padding: 8 }}>
      <Component.Row>
        <Fonts.MediumFont>Date:</Fonts.MediumFont>
        <Component.Spacer position="left" size="8" />
        <Fonts.LightFont>{formateDate(item.createdAt)}</Fonts.LightFont>
      </Component.Row>
      <Component.Row>
        <Fonts.MediumFont>Vehicle ID :</Fonts.MediumFont>
        <Component.Spacer position="left" size="8" />
        <Fonts.LightFont>{item.vehicleID}</Fonts.LightFont>
      </Component.Row>
      <Fonts.MediumFont>Task Descripation :</Fonts.MediumFont>
      <Fonts.LightFont lineHeight={20}>{item.descripation}</Fonts.LightFont>
    </div>
  );
};
export const TaskCard = ({ task, formateDate }) => {
  const [showWorkerList, setShowWorkerList] = useState(false);
  return (
    <Component.CustomCard
      title={task.groupName}
      body={
        <div>
          <CardBody
            item={task}
            formateDate={formateDate}
            showWorkerList={showWorkerList}
          />
        </div>
      }
      footer={
        <CardFooter
            item={task}
            setShowWorkerList={setShowWorkerList}
            showWorkerList={showWorkerList}
          />
      }
    />
  );
};

export const CardFooter = ({
  item,
  setShowWorkerList,
  showWorkerList,
}) => {
  return (
    <div style={{ padding: 8, width: "100%" }}>
      <Component.Row
        style={{ width: "100%", height: "100%"}}
        justifyContent="space-between"
        alignItems="center"
      >
        <Component.Spacer position="left" size="10">
        <Component.Row alignItems="center">
          {showWorkerList ? (
            <AiOutlineException
              style={{ cursor: "pointer" }}
              onClick={() => setShowWorkerList(false)}
              color={appColors.darkColor}
              size={20}
            />
          ) : (
            <>
              <FaUsersCog
                style={{ cursor: "pointer" }}
                onClick={() => setShowWorkerList(true)}
                color={appColors.darkColor}
                size={20}
              />
              <Component.Spacer position="left" size="8">
                <Fonts.LightFont>{item.assignedWorkers.length}</Fonts.LightFont>
              </Component.Spacer>
            </>
          )}
          
        </Component.Row>
        </Component.Spacer>
        <TaskContainer>
          <Fonts.LightFont>{item.status}</Fonts.LightFont>
        </TaskContainer>
      </Component.Row>
    </div>
  );
};