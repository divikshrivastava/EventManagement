const baseUrl = import.meta.env.VITE_API

export const getEventSessions = async () => {
    try {
        const response = await fetch(baseUrl + 'event/101/');
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.log(error)
    }
}

export const createNewSession = async (dataToSend) => {
    try {
        const response = await fetch(baseUrl + 'event/101/session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        return responseData
    }
    catch (error) {
        console.log(error)
    }
}

export const getSessionDetails = async (id) => {
    try {
        const response = await fetch(baseUrl + 'session?sessionId=' + id);
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.log(error)
    }
} 