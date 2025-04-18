const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, DevOps! this is second2  webhook');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

