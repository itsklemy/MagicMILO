const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { priceId, userEmail, userId, plan } = JSON.parse(event.body);

    let customer;
    if (userEmail) {
      const existing = await stripe.customers.list({ email: userEmail, limit: 1 });
      customer = existing.data.length > 0
        ? existing.data[0]
        : await stripe.customers.create({
            email: userEmail,
            metadata: { userId, app: 'magic-milo' }
          });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer: customer?.id,
      customer_email: customer ? undefined : userEmail,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.URL}/paiement-reussi?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.URL}/?annule=true`,
      metadata: { userId, plan: plan || 'monthly', app: 'magic-milo' },
      locale: 'fr',
      allow_promotion_codes: true,
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ url: session.url, sessionId: session.id }),
    };
  } catch (error) {
    console.error('Stripe error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};