import "./MyTimeline.css";
import content from "../TimelineContent.json";
import { Book, School, Terminal } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";

export function MyTimeline() {
  return (
    <>
      <Timeline position="alternate" className="content">
        {Object.values(content).map((data) => {
          return (
            <TimelineItem key={data.timestamp}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {data.timestamp}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  {data.icon == "Book" ? (
                    <Book />
                  ) : data.icon == "School" ? (
                    <School />
                  ) : (
                    <Terminal />
                  )}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  {data.title}
                </Typography>
                <Typography>{data.subtitle}</Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </>
  );
}
