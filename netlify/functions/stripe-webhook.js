const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const sig = event.headers['stripe-signature'];

  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature invalide:', err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  try {
    switch (stripeEvent.type) {
      case 'checkout.session.completed':
        console.log('Paiement réussi:', stripeEvent.data.object.metadata?.userId);
        break;
      case 'customer.subscription.deleted':
        console.log('Abonnement annulé:', stripeEvent.data.object.customer);
        break;
      case 'invoice.payment_succeeded':
        console.log('Renouvellement réussi:', stripeEvent.data.object.customer);
        break;
      case 'invoice.payment_failed':
        console.log('Paiement échoué:', stripeEvent.data.object.customer);
        break;
      default:
        console.log('Événement:', stripeEvent.type);
    }

    return { statusCode: 200, body: JSON.stringify({ received: true }) };
  } catch (error) {
    console.error('Webhook error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};