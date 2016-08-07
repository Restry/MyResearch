 var config = {
        client_id: '436704449946-088lhtojlmss7m3pu0cmcdvne1vqqsgj.apps.googleusercontent.com', //fake client id
        scope: 'https://www.googleapis.com/auth/calendar.readonly'
    };
    gapi.client.setApiKey('fId345AM20HXXXXXXXXXXXXXXXXgT3f9kyp2REfkaw2'); //fake api key
    gapi.client.load('calendar', 'v3', function() {
        var today = new Date(),
            request;

        request = gapi.client.calendar.calendarList.get({
            calendarId: 'pt_br.brazilian#holiday@group.v.calendar.google.com',
            timeMin: (new Date(today.getFullYear(), today.getMonth(), today.getDay(), 0, 0, 0, 0)).toISOString(),
            timeMax: (new Date(today.getFullYear(), today.getMonth(), today.getDay(), 23, 59, 59, 999)).toISOString(),
            fields: 'items(creator(displayName,email),end,endTimeUnspecified,start,summary)'
        });

        request.execute(function(response) {
            window.alert('length of items: ' + response.items.length);
        });

    });