async function sendText() {
  const textInput = document.getElementById("input-text").value;
  const result = document.getElementById("result");

  res = await fetch("/api", {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text }),
  });

  data = await res.json();
  result.innerText = `${data.status}`;
}
