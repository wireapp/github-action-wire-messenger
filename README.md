# Wire GitHub action bot


## Usage

```yaml
  - name: Wire GitHub action bot
    uses: wireapp/wire-github-action-bot@v1
    with:
      email: ${{secrets.WIRE_EMAIL}}
      password: ${{secrets.WIRE_PASSWORD}}
      conversation: ${{secrets.WIRE_CONVERSATION}}
      text: 'Hello, World!'
```
