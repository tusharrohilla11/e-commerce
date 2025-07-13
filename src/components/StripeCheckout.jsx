import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (paymentError) {
      setError(paymentError.message);
      setIsLoading(false);
      return;
    }

    // In a real application, you would send the payment method to your server
    // to create a payment intent and confirm the payment
    // For demo purposes, we'll simulate a successful payment
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
      alert('Payment successful! Thank you for your purchase.');
    }, 2000);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ 
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
          Payment Details
        </h3>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Card Information
          </label>
          <div style={{ 
            padding: '12px', 
            border: '1px solid #ccc', 
            borderRadius: '4px',
            backgroundColor: 'white'
          }}>
            <CardElement options={cardElementOptions} />
          </div>
        </div>

        {error && (
          <div style={{ 
            color: '#e74c3c', 
            marginBottom: '15px',
            padding: '10px',
            backgroundColor: '#fdf2f2',
            border: '1px solid #fecaca',
            borderRadius: '4px'
          }}>
            {error}
          </div>
        )}

        <div style={{ 
          marginBottom: '20px', 
          fontSize: '18px', 
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          Total: ₹{amount}
        </div>

        <button
          type="submit"
          disabled={!stripe || isLoading}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isLoading ? '#ccc' : '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          {isLoading ? 'Processing...' : `Pay ₹${amount}`}
        </button>
      </div>
    </form>
  );
};

const StripeCheckout = ({ amount, onSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} onSuccess={onSuccess} />
    </Elements>
  );
};

export default StripeCheckout;
