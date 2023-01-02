import './Clock.css'
const Clock = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let time = 0;

    if (minutes < 10) time = `${hours}:0${minutes}`;
    else time = `${hours}:${minutes}`;

    if (hours < 10) time = `0${time}`;


    return (
        <div className="time">{time}</div>
    )
}

export default Clock