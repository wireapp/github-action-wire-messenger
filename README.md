# Wire Messenger

Send messages to Wire conversations using GitHub Actions.

## Usage

Send a text:

```yaml
  - name: Wire Messenger
    uses: wireapp/github-action-wire-messenger@v1
    with:
      email: ${{secrets.WIRE_EMAIL}}
      password: ${{secrets.WIRE_PASSWORD}}
      conversation: ${{secrets.WIRE_CONVERSATION}}
      send_text: 'Hello, World!'
```

Send a GIF via [Giphy](https://giphy.com/):

```yaml
  - name: Wire Messenger
    uses: wireapp/github-action-wire-messenger@v1
    with:
      email: ${{secrets.WIRE_EMAIL}}
      password: ${{secrets.WIRE_PASSWORD}}
      conversation: ${{secrets.WIRE_CONVERSATION}}
      send_gif: 'meme'
```

## Tutorial

Click the thumbnail if you want to watch our setup video:

[![Click to watch](https://img.youtube.com/vi/1OebjwY6sXk/0.jpg)](https://www.youtube.com/watch?v=1OebjwY6sXk)
