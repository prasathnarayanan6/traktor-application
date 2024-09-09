const client = require('../../utils/conn');
const CreateEventsModel = (event_type, event_title, event_privacy, event_description, event_date, event_time, created_by) => {
    return new Promise((resolve, reject) => {
        client.query('INSERT INTO EVENTS (event_type, event_title, event_privacy, event_description, event_date, event_time, created_by) VALUES($1, $2, $3, $4, $5, $6, $7)', [event_type, event_title, event_privacy, event_description, event_date, event_time, created_by], 
            (err, result) => {
                 if(err) 
                 {
                    reject(err);
                 }
                 else 
                 {
                    resolve(result);
                 }
            }
        )
    })
}

const FetchEventsModel = () => {
    return new Promise((resolve, reject) => {
        client.query('SELECT * FROM events',
            (err, result) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(result)
                }
            }
        )
    })
}
module.exports = {CreateEventsModel, FetchEventsModel};