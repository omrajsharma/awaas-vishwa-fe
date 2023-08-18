export const itemDateFormatter = (rawDate) => {

    // Parse ISO 8601 string
    const parsedDatetime = new Date(rawDate);

    // Current Date
    const currentDate = new Date;

    // Calculate time difference in milliseconds
    const timeDifference = currentDate - parsedDatetime;

    // Convert milliseconds to days
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    // Integer value of dayDifference
    const daysDiffInt = Math.floor(daysDifference);

    // Logic
    if (daysDiffInt < 1) {
        return 'TODAY';
    } else if (daysDiffInt == 1) {
        return 'YESTERDAY';
    } else if (daysDiffInt <= 7) {
        return daysDiffInt + " DAYS AGO"
    } else {
        return parsedDatetime.toLocaleDateString("en-US", { day: "numeric", month: "long" });
    }
};
