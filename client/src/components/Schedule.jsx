import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = "2022-11-07";
const schedulerData = [
  {
    startDate: "2022-11-07T07:00",
    endDate: "2022-11-07T07:45",
    title: "Biologia",
  },
  {
    startDate: "2022-11-07T07:45",
    endDate: "2022-11-07T08:35",
    title: "Filosofia",
  },

  {
    startDate: "2022-11-07T08:35",
    endDate: "2022-11-07T09:30",
    title: "TCC",
  },
  {
    startDate: "2022-11-07T09:45",
    endDate: "2022-11-07T10:35",
    title: "Programação Web & Mobile",
  },
  {
    startDate: "2022-11-07T10:35",
    endDate: "2022-11-07T11:25",
    title: "Matemática",
  },
  {
    startDate: "2022-11-07T11:25",
    endDate: "2022-11-07T12:15",
    title: "Inglês",
  },
];

export default function Schedule() {
    return (
      <Paper className="col-span-3 relative">
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate} />
          <DayView startDayHour={7} endDayHour={12} />
          <Appointments /> 
        </Scheduler>
      </Paper>
    );}
