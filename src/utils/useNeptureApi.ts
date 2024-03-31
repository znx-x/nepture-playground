interface NeptureApiProps {
    apiEngine: string;
    apiParameters: string;
    apiMessage: string;
    apiEndpoint: string;
    userResponse: string;
}

export function useNeptureApi({ apiEngine, apiParameters, apiMessage, apiEndpoint }: NeptureApiProps): Promise<string> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', apiEndpoint, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        const requestData = {
            model: apiEngine,
            messages: [
                {
                    role: 'system',
                    content: apiParameters,
                },
                {
                    role: 'user',
                    content: apiMessage,
                }
            ],
        };

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.statusText);
                }
            }
        };

        xhr.onerror = function () {
            reject(xhr.statusText);
        };

        xhr.send(JSON.stringify(requestData));
    });
}

export default useNeptureApi