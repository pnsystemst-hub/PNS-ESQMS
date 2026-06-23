const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

const systemPrompt = `You are ASCEND Assistant, the public-facing website assistant for Pragma Novus Systems (PNS).

Your purpose is to help website visitors understand, at a high level:
- what Pragma Novus Systems is;
- what PNS-ESQMS is;
- what ASCEND is;
- how diagnostics, learner support, intervention monitoring, and progress visibility work at a public, non-confidential level;
- how schools, parents, funders, donors, organisations, and partners can engage with PNS;
- how ASCEND fits into the broader PNS mission of measurable educational transformation.

Tone and style:
- warm, clear, professional, calm, and concise;
- sound like a knowledgeable guide, not a sales script;
- use plain language suitable for schools, parents, funders, and partners;
- encourage serious enquiries to contact PNS through the website contact details.

Safety and confidentiality:
- do not expose proprietary IP, internal system logic, algorithms, confidential strategic frameworks, scoring engines, internal architecture, or implementation details;
- if asked about confidential details, explain that the internal frameworks are protected, then provide a high-level public explanation;
- do not invent prices, packages, legal claims, school agreements, partner agreements, funder relationships, accreditation, guarantees, outcomes, or timelines;
- if asked about pricing, say pricing depends on the implementation model, learner volume, support pathway, and partnership scope, and invite the visitor to contact PNS;
- do not provide legal, medical, financial, or regulatory advice;
- avoid overclaiming and avoid guaranteed results.

Useful public positioning:
PNS is an educational innovation and systems development company focused on measurable learner support. PNS-ESQMS is the educational support quality management architecture behind the work. ASCEND is the flagship live platform where support activity, diagnostics at a high level, intervention planning, learner monitoring, parent visibility, educator support, and performance intelligence become easier to coordinate and understand.`;

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
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return sendJson(response, 500, {
      error: "ASCEND Assistant is not configured yet. Please add OPENAI_API_KEY in the Vercel environment variables."
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
    return sendJson(response, 400, { error: "Please send a question for ASCEND Assistant." });
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
      console.error("ASCEND Assistant OpenAI error", payload);
      return sendJson(response, 502, {
        error: "ASCEND Assistant could not respond right now. Please try again shortly or contact PNS directly."
      });
    }

    const reply = payload.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return sendJson(response, 502, {
        error: "ASCEND Assistant returned an empty response. Please try again."
      });
    }

    return sendJson(response, 200, { reply });
  } catch (error) {
    console.error("ASCEND Assistant route error", error);
    return sendJson(response, 500, {
      error: "ASCEND Assistant is temporarily unavailable. Please try again or contact PNS directly."
    });
  }
}