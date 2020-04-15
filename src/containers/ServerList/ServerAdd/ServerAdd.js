import React from 'react';

const ServerAdd = (props) => {
    return (
        <div>
            <h1>New Server</h1>
            <form>
                <label>Server Name:</label>
                <input type='text' name='ServerName' /><br /><br />

                {/* //dropdown */}
                <label>Σε ποιο σώμα ανήκει: </label><br />
                <input type='radio' id='pa' name='serverBelogsTo' value='pa' />
                <label htmlFor='pa'>Αεροπορία</label><br />
                <input type='radio' id='pn' name='serverBelogsTo' value='pn' />
                <label htmlFor='pn'>Ναυτικό</label><br />
                <input type='radio' id='strxiras' name='serverBelogsTo' value='strxiras' />
                <label htmlFor='strxiras'>Πεζικό</label><br />
                <input type='radio' id='geetha' name='serverBelogsTo' value='geetha' />
                <label htmlFor='geetha'>ΓΕΕΘΑ</label>
                <br /><br />


                {/* xxx.xxx.xxx.xxx */}
                <label>Ip address of Server: </label>
                <input type='text' name='' /><br /><br />

                <label>Role:</label><br />
                <input type='radio' id='targetServer' name='serverRole' value='targetServer' />
                <label htmlFor='targetServer'>Target Server</label><br />
                <input type='radio' id='whispererServer' name='serverRole' value='whispererServer' />
                <label htmlFor='whispererServer'>Whisperer Server</label><br />
                <input type='radio' id='other' name='serverRole' value='other' />
                <label htmlFor='other'>Other</label><br />

                <button onClick={props.addServer({
                    serverCode: 7,
                    serverName: "newServer",
                    serverPingStatus: true,
                    serverCurlStatus: false,
                    serverRole: 1
                })}>Save</button>
                <button onClick={props.cancelAddServer}>Cancel</button>
            </form>
        </div>
    );
};

export default ServerAdd;