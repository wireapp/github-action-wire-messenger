# Wire

This repository is part of the source code of Wire. You can find more information at [wire.com](https://wire.com) or by contacting opensource@wire.com.

You can find the published source code at [github.com/wireapp](https://github.com/wireapp).

For licensing information, see the attached LICENSE file and the list of third-party licenses at [wire.com/legal/licenses/](https://wire.com/legal/licenses/).

## Proteus

### Installation

```
yarn add @wireapp/proteus
```

### Usage

```typescript
import {init, keys} from '@wireapp/proteus';

await init();

const yourIdentity = keys.IdentityKeyPair.new();
```

### Performance Benchmark

Run benchmark on main thread:

```
yarn start:benchmark
```

Run benchmark with worker threads:

```
yarn start:benchmark --workers [amount]
```

Results:

| Scenario | MacBook Air M1 (2020) A2337<br>(8C CPU, 16 GB RAM)<br>Node v16.0.0 |
| --- | :-: |
| Generating "4000" pre-key bundles (single-threaded) | 1461ms |
| Initializing "4000" sessions (single-threaded) | 2967ms |
| Encrypting "4000" texts (single-threaded) | 200ms |

### Decryption Errors

| Error Code | Type/Error | Reason |
| :-: | :-: | :-: |
| 2 | `RangeError`<br>Offset is outside the bounds of the DataView | Remote side failed to encrypt message (`undefined` text or similar error), thus we receive a 💣 from Cryptobox. |
| 200 | `DecryptError`<br>Unknown message type | Remote side does not follow proteus specification |
| 201 | `DecryptError.InvalidMessage`<br>Can't initialise a session from a CipherMessage. | Occurs when the remote party thinks we have an initialised session, but it does not/no longer exist locally. We must have confirmed the session with the remote party by sending them a message. Until then then they continue to send us PreKeyMessages instead of CipherMessages. We prematurely deleted the session before decrypting all events. |
| 202 | `DecryptError.InvalidMessage`<br>Unknown message format: The message is neither a "CipherMessage" nor a "PreKeyMessage". | Remote side does not follow proteus specification |
| 203 | `DecryptError.PrekeyNotFound`<br>Could not delete PreKey |
| 204 | `DecryptError.RemoteIdentityChanged`<br>Remote identity changed | Client of the user has changed without informing us (Man in the middle attack? or database conflicts on the remote side: sessions get mixed with new client) |
| 205 | `DecryptError.InvalidMessage`<br>No matching session tag. | Usually happens when we receive a message intended for another client. |
| 206 | `DecryptError.InvalidSignature`<br>Decryption of a message in sync failed | Envelope mac key verification failed |
| 207 | `DecryptError.InvalidSignature`<br>Decryption of a newer message failed | Envelope mac key verification failed. Session broken or out of sync. Reset the session and decryption is likely to work again! |
| 208 | `DecryptError.OutdatedMessage`<br>Message is out of sync | Opposite of "Too distant future" error |
| 209 | `DecryptError.DuplicateMessage`<br>Duplicate message | Happens if an encrypted message is decrypted twice |
| 210 | `DecryptError.InvalidSignature`<br>Decryption of a previous (older) message failed | Envelope mac key verification |
| 211 | `DecryptError.TooDistantFuture`<br>Message is from too distant in the future | More than 1000 messages at the beginning of the receive chain were skipped |
| 212 | `DecryptError.TooDistantFuture`<br>Message is from too distant in the future | More than 1000 messages on the receive chain were skipped |
| 213 | `DecryptError.InvalidMessage`<br>Sender failed to encrypt a message. | Error on receiver side when remote side sends a `💣` |
| 300 | `DecryptError.InvalidMessage`<br>The received message was too big. |
