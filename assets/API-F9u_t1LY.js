const n=(t,o=[])=>fetch("https://api.nitrocode.ir/"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(e=>e.json());export{n as P};
