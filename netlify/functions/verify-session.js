cat > netlify/functions/verify-session.js << 'EOF'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { sessionId } = JSON.parse(event.body);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['subscription', 'customer']
    });

    if (session.payment_status !== 'paid') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Paiement non complété' })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        isPremium: true,
        customerId: session.customer?.id,
        subscriptionId: session.subscription?.id,
        plan: session.metadata?.plan,
        email: session.customer?.email || session.customer_email,
        currentPeriodEnd: session.subscription?.current_period_end
          ? new Date(session.subscription.current_period_end * 1000).toISOString()
          : null
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
EOF