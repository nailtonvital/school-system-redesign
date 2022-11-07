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
    startDate: "2022-11-07T09:45",
    endDate: "2022-11-07T10:35",
    title: "Web Programming",
  },
  {
    startDate: "2022-11-07T10:35",
    endDate: "2022-11-07T11:25",
    title: "Math",
  },
  {
    startDate: "2022-11-07T11:25",
    endDate: "2022-11-07T12:15",
    title: "English",
  },
];

export default function Schedule() {
    return (
      <Paper className="col-span-3">
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate} />
          <DayView startDayHour={9} endDayHour={14} />
          <Appointments />
        </Scheduler>
      </Paper>
    );}
