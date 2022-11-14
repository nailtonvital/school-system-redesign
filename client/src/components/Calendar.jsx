import React, { useState } from "react";
import Scheduler from "react-mui-scheduler";
import faker from "faker";

export default function Calendar() {
  const [state] = useState({
    options: {
      transitionMode: "zoom", // or fade
      startWeekOn: "mon", // or sun
      defaultMode: "month", // or week | day | timeline
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540,
    },
    alertProps: {
      open: true,
      color: "info", // info | success | warning | error
      severity: "info", // info | success | warning | error
      message: "O Fim das Aulas Estão Chegando 🔥 ",
      showActionButton: true,
      showNotification: true,
      delay: 1500,
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true,
    },
  });

  const events = [
    {
      id: faker.datatype.number({ min: 0, max: 1000 }),
      label: "School day",
      groupLabel: "Centro Paula Souza",
      user: "Centro Paula Souza",
      color: "#1050B1",
      startHour: "07:00 AM",
      endHour: "21:00 PM",
      date: "2022-11-07",
      createdAt: new Date(),
      createdBy: "Centro Paula Souza",
    },
    {
      id: faker.datatype.number({ min: 0, max: 1000 }),
      label: "School day",
      groupLabel: "Centro Paula Souza",
      user: "Centro Paula Souza",
      color: "#1050B1",
      startHour: "07:00 AM",
      endHour: "21:00 PM",
      date: "2022-11-08",
      createdAt: new Date(),
      createdBy: "Centro Paula Souza",
    },
    {
      id: faker.datatype.number({ min: 0, max: 1000 }),
      label: "School day",
      groupLabel: "Centro Paula Souza",
      user: "Centro Paula Souza",
      color: "#1050B1",
      startHour: "07:00 AM",
      endHour: "21:00 PM",
      date: "2022-11-09",
      createdAt: new Date(),
      createdBy: "Centro Paula Souza",
    },
    {
      id: faker.datatype.number({ min: 0, max: 1000 }),
      label: "School day",
      groupLabel: "Centro Paula Souza",
      user: "Centro Paula Souza",
      color: "#1050B1",
      startHour: "07:00 AM",
      endHour: "21:00 PM",
      date: "2022-11-10",
      createdAt: new Date(),
      createdBy: "Centro Paula Souza",
    },
    {
      id: faker.datatype.number({ min: 0, max: 1000 }),
      label: "School day",
      groupLabel: "Centro Paula Souza",
      user: "Centro Paula Souza",
      color: "#1050B1",
      startHour: "07:00 AM",
      endHour: "21:00 PM",
      date: "2022-11-11",
      createdAt: new Date(),
      createdBy: "Centro Paula Souza",
    },
    {
      id: faker.datatype.number({ min: 0, max: 1000 }),
      label: "School day",
      groupLabel: "Centro Paula Souza",
      user: "Centro Paula Souza",
      color: "#1050B1",
      startHour: "07:00 AM",
      endHour: "21:00 PM",
      date: "2022-11-14",
      createdAt: new Date(),
      createdBy: "Centro Paula Souza",
    },
    {
      id: faker.datatype.number({ min: 0, max: 1000 }),
      label: "School day",
      groupLabel: "Centro Paula Souza",
      user: "Centro Paula Souza",
      color: "#1050B1",
      startHour: "07:00 AM",
      endHour: "21:00 PM",
      date: "2022-11-15",
      createdAt: new Date(),
      createdBy: "Centro Paula Souza",
    },
    {
      id: faker.datatype.number({ min: 0, max: 1000 }),
      label: "Recess",
      groupLabel: "Centro Paula Souza",
      user: "Centro Paula Souza",
      color: "#B11016",
      startHour: "07:00 AM",
      endHour: "21:00 PM",
      date: "2022-11-16",
      createdAt: new Date(),
      createdBy: "Centro Paula Souza",
    },
    {
      id: faker.datatype.number({ min: 0, max: 1000 }),
      label: "Recess",
      groupLabel: "Centro Paula Souza",
      user: "Centro Paula Souza",
      color: "#B11016",
      startHour: "07:00 AM",
      endHour: "21:00 PM",
      date: "2022-11-17",
      createdAt: new Date(),
      createdBy: "Centro Paula Souza",
    },
    {
      id: faker.datatype.number({ min: 0, max: 1000 }),
      label: "Recess",
      groupLabel: "Centro Paula Souza",
      user: "Centro Paula Souza",
      color: "#B11016",
      startHour: "07:00 AM",
      endHour: "21:00 PM",
      date: "2022-11-18",
      createdAt: new Date(),
      createdBy: "Centro Paula Souza",
    },
    
  ];
  return (
    <Scheduler
      locale="en"
      events={events}
      legacyStyle={false}
      options={state?.options}
      alertProps={state?.alertProps}
      toolbarProps={state?.toolbarProps}

    />
  );
}
