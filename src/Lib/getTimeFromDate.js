export const GetTimeFromDate = (date) => {
    let dateTime = new Date(date);
    let hour = dateTime.getHours();
    let hour_12 = hour === 12 ? 12 : hour%12;
    let minute = dateTime.getMinutes();
    let am_pm = hour > 11 ? 'PM' : 'AM';

    return `${hour_12}:${minute}0 ${am_pm}`;
}