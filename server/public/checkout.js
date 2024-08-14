// This is your test secret API key.
const stripe = Stripe("pk_test_51PnYSzA2t8lirDF53PNYS0aAfDPUd4RzdPd0567DmP8V3dmGqRGUhS4tAVcFN9biGYGy19RBZjKHJ6IRzTV8UG4300qSWRpucW");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}