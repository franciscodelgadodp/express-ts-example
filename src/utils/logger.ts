import logger from "pino";
import dayjs from "dayjs";
import e from "express";

const log = logger({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
