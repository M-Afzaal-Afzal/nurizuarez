export default function handler(req, res) {
  if (req.method === 'POST') {
    const HUBSPOT_API_KEY = process.env.HUBSPOT_KEY;
    const HUBSPOT_PORTAL_ID = "20821295";
    const HUBSPOT_FORM_GUID = "37e8e54c-7dfb-4296-9dee-45502198143a";
    const url = `https://api.hsforms.com/submissions/v3/integration/secure/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}?hapikey=${HUBSPOT_API_KEY}`;
    const fullName = req.body.name;
    const firstName = fullName.split(' ').slice(0, -1).join(' ');
    const lastName = fullName.split(' ').slice(-1).join(' ');
    const pageUri = req.body.pageUri;
    const payload = {
      "fields": [
        { "name": "email", "value": req.body.email },
        { "name": "role", "value": req.body.role },
        { "name": "firstname", "value": firstName },
        { "name": "lastname", "value": lastName }
      ],
      "context": { pageUri }
    }
    console.log('req', req.body, 'PAYLOAD', payload);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(function (response) {
      console.log('hubspot response: ', response);
      res.status(response.status).json({ desc: `POST response`, data: response.text(), json: response.json() })

    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });
  } else {
    res.status(200).json({ desc: 'Nothing happend. This endpoint only works with POST requests' })
  }
}
