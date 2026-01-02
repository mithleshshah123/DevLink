const cron = require("node-cron");
const { subDays, startOfDay, endOfDay } = require("date-fns");
const ConnectionRequestModel = require("../models/connectionRequest");
const sendEmail = require("./sendEmail");
// This will run at 8 a.m morning every day
cron.schedule("0 8 * * *", async () => {
  //send emails to all people who got request yesterday
  try {
    const yesterday = subDays(new Date(), 1);

    const yesterdayStart = startOfDay(yesterday);
    const yesterdayEnd = endOfDay(yesterday);

    const pendingRequestsofYesterday = await ConnectionRequestModel.find({
      status: "interested",
      createdAt: {
        $gte: yesterdayStart,
        $lt: yesterdayEnd,
      },
    }).populate("fromUserId toUserId");

    const listOfEmails = [
      ...new Set(pendingRequestsofYesterday.map((req) => req.toUserId.emailId)),
    ];

    console.log(listOfEmails);

    for (const email of listOfEmails) {
      try {
        const res = await sendEmail.run(
          "New Connection Requests Pending for " + email,
          "There are so many friend requests pending,please login to DevLink.world and accept or reject the request."
        );
        console.log(res);
      } catch (err) {}
    }
  } catch (err) {
    console.log(err);
  }
});
