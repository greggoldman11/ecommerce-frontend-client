// import React from 'react'
// import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
//
// class CheckoutForm extends React.Component {
//   handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault()
//
//     const { stripe, elements } = this.props
//
//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return
//     }
//
//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const cardElement = elements.getElement(CardElement)
//
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement
//     })
//
//
//   render () {
//     const { stripe } = this.props
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4'
//                 }
//               },
//               invalid: {
//                 color: '#9e2146'
//               }
//             }
//           }}
//         />
//         <button type="submit" disabled={!stripe}>
//           Pay
//         </button>
//       </form>
//     )
//   }
// }
//
// export default function InjectedCheckoutForm (props) {
//   return (
//     <ElementsConsumer>
//       {({ elements, stripe }) => (
//         <div>
//           <CheckoutForm elements={elements} stripe={stripe} />
//           { props.location.state }
//         </div>
//       )}
//     </ElementsConsumer>
//   )
// }
