export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { name, email, details } = await req.json();

    // Validate required fields
    if (!name || !email || !details) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // For now, we'll just log the contact form submission
    // In production, you would integrate with your preferred email service
    console.log('Contact form submission:', {
      name,
      email,
      details,
      timestamp: new Date().toISOString()
    });

    // Simulate successful email sending
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully" 
      }), 
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
