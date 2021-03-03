import months from './months';

const helper = {
    getDate: function (time) {
        let date = new Date(time);
        let d = date.getDate();
        let m = months[date.getMonth()];
        let y = date.getFullYear();
        return d + ' ' + m + ', ' + y;
    }
}

export default helper;