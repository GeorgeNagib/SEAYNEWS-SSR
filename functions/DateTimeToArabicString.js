const months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
              "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

export default function DateTimeToArabicString({datetime, dateOnly = false}) {
    const date = (new Date(datetime));
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'مساءا' : 'صباحا';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    if(dateOnly) return `${day} ${month},${year}`;

    return `${day} ${month},${year} |  ${strTime}`;
}
