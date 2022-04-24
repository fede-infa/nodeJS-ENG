# Websocket (Transmission Control Protocol)

Is one of the main protocols of the Internet. It provides reliable, ordered and error-checked delivery of a stream of bytes between applications running on host communicating via an IP network. TCP is part of the transport layer, it's also connection-oriented, and a connection between client and server is established before data can be sent.

Three-way handshake (active open), retransmission, and error detection adds to reliability but lengthens latency. Applications that do not require reliable data stream service may use the User Datagram Protocol (UDP), which provides a connectionless datagram service that prioritizes time over reliability.

[WebSocket vs HTTP](images/WebSocket-vs-HTTP.png)

## HTTP
- The information is Pulled by a client
- Used for APIs y web resources
- HTTP protocol
- One way connection

## Websockets
- The information is Pushed by the server
- Real time communication
- TCP protocol
- Two way connection

## Socket.io
It's a library for NodeJS, it has a library for the client & server, it works with events.

### Features
- HTTP long-polling fallback
- Automatic reconnection: Socket.IO includes a heartbeat mechanism, which periodically checks the status of the connection. And when the client eventually gets disconnected, it automatically reconnects with an exponential back-off delay, in order not to overwhelm the server.
- Packet buffering: The packets are automatically buffered when the client is disconnected, and will be sent upon reconnection.
- Broadcasting: On the server-side, you can send an event to all connected clients or to a subset of clients
- Multiplexing: Namespaces allow you to split the logic of your application over a single shared connection. This can be useful for example if you want to create an "admin" channel that only authorized users can join.

### What Socket.IO is not
Although Socket.IO indeed uses WebSocket for transport when possible, it adds additional metadata to each packet. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a plain WebSocket server either.