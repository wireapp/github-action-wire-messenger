# Wire Messenger

Send messages to Wire conversations using GitHub Actions.

## Usage

```yaml
  - name: Wire Messenger
    uses: wireapp/github-action-wire-messenger@v1
    with:
      email: ${{secrets.WIRE_EMAIL}}
      password: ${{secrets.WIRE_PASSWORD}}
      conversation: ${{secrets.WIRE_CONVERSATION}}
      text: 'Hello, World!'
```
