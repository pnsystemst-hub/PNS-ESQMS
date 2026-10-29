const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

const systemPrompt = `You are PNS Assistant, the friendly website assistant for Pragma Novus Systems (PNS).

Facts you can share:
- Pragma Novus Systems (Pty) Ltd, reg. 2026/496918/07, is a South African company at 1 Mushroom Road, Waterfall, The Precinct, 1686. Tagline: "Intelligent Systems. Novel Solutions."
- Contact: +27 67 033 6452, frontdesk@pragmansystems.co.za.
- PNS runs two services:
  1. Ascend Homework & Tutoring Center ("No Promises. Just Results."), at The Precinct in Waterfall: supervised homework support, small-group tutoring and exam prep for Grade R to Grade 12, in person and online. Parents register at ascendhtcenter.pragmansystems.co.za, add their children, choose homework support, tutoring or both, and follow attendance, homework, marks and tutor reports in a parent portal. Live online lessons run inside the portal. Exam prep costs R300 per week. Homework support and tutoring fees will be published at the end of November 2026. No payment is taken online.
  2. NextStep (nextstep.pragmansystems.co.za): helps school leavers, graduates and people finishing training find genuine opportunities (jobs, learnerships, internships), keep their documents in order, and prepare honest, strong applications.
- Schools, community organisations and sponsors can contact PNS to discuss working together.

How to answer:
- warm, plain and brief: two to four short sentences unless more detail is asked for;
- point people to the right service and, for anything you can't answer, to the phone number or email above;
- never invent prices, dates, partnerships, guarantees or results beyond the facts above;
- do not give legal, medical or financial advice.`;

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

function cleanMessages(messages) {
  if (!Array.isArray(messages)) return [];

  return messages
    .filter((message) => message && ["user", "assistant"].includes(message.role) && typeof message.content === "string")
    .slice(-8)
    .map((message) => ({
      role: message.role,
      content: message.content.slice(0, 1200)
    }));
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Method not allowed." });
  }

  // Add OPENAI_API_KEY in Vercel under Project Settings -> Environment Variables.
  // Keep it server-side only. Do not create or expose a VITE_OPENAI_API_KEY value.
  // Optional: set OPENAI_MODEL in Vercel if PNS later chooses a different approved model.
  const apiKey = (process.env.OPENAI_API_KEY || "")
    .trim()
    .replace(/^OPENAI_API_KEY=/, "")
    .replace(/^['"]|['"]$/g, "");
  if (!apiKey) {
    return sendJson(response, 500, {
      error: "PNS Assistant is not configured yet. Please add OPENAI_API_KEY in the Vercel environment variables."
    });
  }

  let requestBody = request.body || {};
  if (typeof requestBody === "string") {
    try {
      requestBody = JSON.parse(requestBody);
    } catch {
      return sendJson(response, 400, { error: "Invalid JSON body." });
    }
  }

  const messages = cleanMessages(requestBody?.messages);
  const latestUserMessage = [...messages].reverse().find((message) => message.role === "user");

  if (!latestUserMessage) {
    return sendJson(response, 400, { error: "Please send a question for PNS Assistant." });
  }

  try {
    const openAiResponse = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        temperature: 0.45,
        max_tokens: 420,
        messages: [
          { role: "system", content: systemPrompt },
          ...messages
        ]
      })
    });

    const payload = await openAiResponse.json().catch(() => ({}));

    if (!openAiResponse.ok) {
      console.error("PNS Assistant OpenAI error", {
        status: openAiResponse.status,
        type: payload.error?.type,
        code: payload.error?.code,
        message: payload.error?.message
      });

      if (openAiResponse.status === 401) {
        return sendJson(response, 401, {
          error: "PNS Assistant is temporarily unavailable. Please try again later or contact PNS directly."
        });
      }

      if (openAiResponse.status === 429) {
        return sendJson(response, 429, {
          error: "PNS Assistant is temporarily unavailable. Please try again later or contact PNS directly."
        });
      }

      if (openAiResponse.status === 404 || payload.error?.code === "model_not_found") {
        return sendJson(response, 502, {
          error: "PNS Assistant is temporarily unavailable. Please try again later or contact PNS directly."
        });
      }

      return sendJson(response, 502, {
        error: "PNS Assistant is temporarily unavailable. Please try again later or contact PNS directly."
      });
    }

    const reply = payload.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return sendJson(response, 502, {
        error: "PNS Assistant returned an empty response. Please try again."
      });
    }

    return sendJson(response, 200, { reply });
  } catch (error) {
    console.error("PNS Assistant route error", error);
    return sendJson(response, 500, {
      error: "PNS Assistant is temporarily unavailable. Please try again or contact PNS directly."
    });
  }
}