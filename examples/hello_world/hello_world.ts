// To run this script:
// bun run hello_world.ts

// To import from local (Debugging and Development)
import { Webinix } from "../../mod.ts";

// To import from online `https://bun.sh` (Production)
// import { Webinix } from "https://bun.sh/x/webinix@2.5.0/mod.ts";

const myHtml = `<!DOCTYPE html>
<html>
  <head>
    <script src="webinix.js"></script>
    <title>Webinix 2 - Bun Hello World Example</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        color: white;
        background: linear-gradient(to right, #507d91, #1c596f, #022737);
        text-align: center;
        font-size: 18px;
      }
      button, input {
        padding: 10px;
        margin: 10px;
        border-radius: 3px;
        border: 1px solid #ccc;
        box-shadow: 0 3px 5px rgba(0,0,0,0.1);
        transition: 0.2s;
      }
      button {
        background: #3498db;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
      }
      h1 { text-shadow: -7px 10px 7px rgb(67 57 57 / 76%); }
      button:hover { background: #c9913d; }
      input:focus { outline: none; border-color: #3498db; }
    </style>
  </head>
  <body>
    <h1>Webinix 2 - Bun Hello World</h1><br>
    A: <input id="MyInputA" value="4"><br><br>
    B: <input id="MyInputB" value="6"><br><br>
    <div id="Result" style="color: #dbdd52">Result: ?</div><br><br>
    <button id="calculate">Calculate</button> - <button onclick="startCheck()">Check Result</button> - <button id="exit">Exit</button>
    <script>
      let Res = 0;
      function get_A() {
        return parseInt(document.getElementById('MyInputA').value);
      }
      function get_B() {
        return parseInt(document.getElementById('MyInputB').value);
      }
      function set_result(res) {
        Res = res;
        document.getElementById("Result").innerHTML = 'Result: ' + Res;
      }
      function startCheck() {
        checkResult(get_A(), get_B(), Res).then((response) => {
          alert(response);
        });
      }
    </script>
  </body>
</html>`;

async function checkResult(e: Webinix.Event) {
  const a = e.arg.number(0);
  const b = e.arg.number(1);
  const res = e.arg.number(2);
  if (a + b === res) {
    return `Correct: ${a} + ${b} = ${res}`;
  } else {
    return `Incorrect: ${a} + ${b} != ${res}`;
  }
}

async function calculate(e: Webinix.Event) {
  const getA = await e.window.script("return get_A()").catch((error) => {
    console.error(`Error in the JavaScript: ${error}`);
    return "";
  });
  const getB = await e.window.script("return get_B()").catch((error) => {
    console.error(`Error in the JavaScript: ${error}`);
    return "";
  });
  const result = parseInt(getA) + parseInt(getB);
  e.window.run(`set_result(${result});`);
}

const myWindow = new Webinix();
myWindow.bind("calculate", calculate);
myWindow.bind("checkResult", checkResult);
myWindow.bind("exit", () => {
  Webinix.exit();
});

myWindow.show(myHtml);
await Webinix.wait();

console.log("Thank you.");
