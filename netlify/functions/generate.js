export async function handler(event) {
  const { prompt } = JSON.parse(event.body)

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024"
    })
  })

  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}