 let HOST = location.origin.replace(/^http/, 'ws')
      let ws = new WebSocket(HOST);
      let el;

      ws.onmessage = (event) => {
        el = document.getElementById('server-response');
        el.innerHTML = 'server-response: ' + event.data;
      };
