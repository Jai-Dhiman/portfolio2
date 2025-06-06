export async function onRequest({}) {
  // Replace this array with your experience entries
  const experience = [
    { id: "1", role: "Frontend Developer", company: "My Company", years: "2020-2023" }
  ];
  return new Response(JSON.stringify(experience), { headers: { "content-type": "application/json" } });
} 