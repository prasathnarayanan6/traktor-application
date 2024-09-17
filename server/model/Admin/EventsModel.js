const client = require('../../utils/conn');
const CreateEventsModel = (event_type, event_title, event_privacy, event_description, event_date, event_time, created_by, select_speaker) => {
    return new Promise((resolve, reject) => {
        client.query('INSERT INTO EVENTS (event_type, event_title, event_privacy, event_description, event_date, event_time, created_by, select_speaker) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [event_type, event_title, event_privacy, event_description, event_date, event_time, created_by, select_speaker], 
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

const RequestSpeakerModel = (select_speaker, event_description, created_by) => {
    return new Promise((resolve, reject) => {
        client.query('INSERT INTO request_speaker(speaker_name, event_description, created_by) VALUES($1, $2, $3)', [select_speaker, event_description, created_by],
            (err, result) => {
                if(err)
                {
                    reject(err)
                }
                else 
                {
                    resolve(result);
                }
            }
        )
    })
}

const AddPastEventsModel = (event_type, event_title, event_date, event_time, event_description, created_by, select_speaker) => {
    return new Promise((resolve, reject) => {
        client.query('INSERT INTO EVENTS (event_type, event_title, event_privacy, event_description, event_date, event_time, created_by, select_speaker) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [event_type, event_title, 'Public', event_description, event_date, event_time, created_by, select_speaker], 
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

module.exports = {CreateEventsModel, FetchEventsModel, RequestSpeakerModel, AddPastEventsModel};