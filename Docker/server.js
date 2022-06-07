import axios from 'axios';
import express from 'express';
const app = express();
const port = 3000;

app.get('/unauthorizedgists/:usern', (req, res) => {
  try {
    axios
      .get('https://api.github.com/users/' + req.params.usern + '/gists')
      .then((response) => {
        res.send(response.data);
      });
  } catch (exception) {
    process.stderr.write('ERROR received from the url' + exception);
  }
});

app.get('/authorizedgists/:username/:accesstoken', (req, res) => {
  try {
    axios
      .get('https://api.github.com/users/' + req.params.username + '/gists', {
        headers: {
          authorization:
            'Basic ' + btoa(req.params.username + ':' + req.params.accesstoken),
        },
      })
      .then((response) => {
        res.send(response.data);
      });
  } catch (exception) {
    process.stderr.write('ERROR received from the url' + exception);
  }
});

app.get('/authorizedrepos/:username/:accesstoken', (req, res) => {
  try {
    axios
      .get('https://api.github.com/users/' + req.params.username + '/repos', {
        headers: {
          authorization:
            'Basic ' + btoa(req.params.username + ':' + req.params.accesstoken),
        },
      })
      .then((response) => {
        res.send(response.data);
      });
  } catch (exception) {
    process.stderr.write('ERROR received from the url' + exception);
  }
});

app.get('/authorizedbranches/:username/:accesstoken/:gitrepo', (req, res) => {
  try {
    axios
      .get(
        'https://api.github.com/repos/' +
          req.params.username +
          '/' +
          req.params.gitrepo +
          '/branches',
        {
          headers: {
            authorization:
              'Basic ' +
              btoa(req.params.username + ':' + req.params.accesstoken),
          },
        }
      )
      .then((response) => {
        res.send(response.data);
      });
  } catch (exception) {
    process.stderr.write('ERROR received from the url' + exception);
  }
});

app.listen(port, () => {
  console.log(`Client app listening on port ${port}`);
});
