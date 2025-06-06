export async function onRequest({}) {
  // Replace this array with your skills
  const skills = [
    { id: "1", name: "JavaScript" },
    { id: "2", name: "React" }
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
} 