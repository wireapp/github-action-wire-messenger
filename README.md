# Wire GitHub action bot


## Usage

```yaml
  - name: Post a message
  - uses: wireapp/wire-github-action-bot@v1
    with:
      email: ${{secrets.WIRE_BOT_EMAIL}}
      password: ${{secrets.WIRE_BOT_PASSWORD}}
      conversation: '123456789'
      text: 'Hello, World!'
```
